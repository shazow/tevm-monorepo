import { Block } from '@tevm/block'
import { ConsensusType } from '@tevm/common'
import { Rlp } from '@tevm/rlp'
import { Trie } from '@tevm/trie'
import { BlobEIP4844Transaction } from '@tevm/tx'
import {
	EthjsAddress,
	type Hex,
	KECCAK256_RLP,
	TypeOutput,
	Withdrawal,
	hexToBytes,
	keccak256,
	parseGwei,
	toType,
	zeros,
} from '@tevm/utils'

import {
	accumulateParentBeaconBlockRoot,
	accumulateParentBlockHash,
	calculateMinerReward,
	encodeReceipt,
	rewardAccount,
} from './runBlock.js'

import { Bloom } from '@ethereumjs/vm'
import type { HeaderData } from '@tevm/block'
import type { TypedTransaction } from '@tevm/tx'
import type { BaseVm } from '../BaseVm.js'
import type { BuildBlockOpts, BuilderOpts, RunTxResult, SealBlockOpts } from '../utils/types.js'
import { runTx } from './runTx.js'

export enum BuildStatus {
	Reverted = 'reverted',
	Build = 'build',
	Pending = 'pending',
}

type BlockStatus = { status: BuildStatus.Pending | BuildStatus.Reverted } | { status: BuildStatus.Build; block: Block }

export class BlockBuilder {
	/**
	 * The cumulative gas used by the transactions added to the block.
	 */
	gasUsed = 0n
	/**
	 *  The cumulative blob gas used by the blobs in a block
	 */
	blobGasUsed = 0n
	/**
	 * Value of the block, represented by the final transaction fees
	 * acruing to the miner.
	 */
	private _minerValue = 0n

	private readonly vm: BaseVm
	private blockOpts: BuilderOpts
	private headerData: HeaderData
	private transactions: TypedTransaction[] = []
	private transactionResults: RunTxResult[] = []
	private withdrawals?: Withdrawal[] | undefined
	private checkpointed = false
	private blockStatus: BlockStatus = { status: BuildStatus.Pending }

	get transactionReceipts() {
		return this.transactionResults.map((result) => result.receipt)
	}

	get minerValue() {
		return this._minerValue
	}

	constructor(vm: BaseVm, opts: BuildBlockOpts) {
		this.vm = vm
		this.blockOpts = { putBlockIntoBlockchain: true, ...opts.blockOpts, common: this.vm.common }

		this.headerData = {
			...opts.headerData,
			parentHash: opts.parentBlock.hash(),
			number: opts.headerData?.number ?? opts.parentBlock.header.number + 1n,
			gasLimit: opts.headerData?.gasLimit ?? opts.parentBlock.header.gasLimit,
			timestamp: opts.headerData?.timestamp ?? Math.round(Date.now() / 1000),
		}
		this.withdrawals = opts.withdrawals?.map(Withdrawal.fromWithdrawalData)

		if (this.vm.common.isActivatedEIP(1559) === true && typeof this.headerData.baseFeePerGas === 'undefined') {
			if (this.headerData.number === vm.common.hardforkBlock('london')) {
				this.headerData.baseFeePerGas = vm.common.param('gasConfig', 'initialBaseFee')
			} else {
				this.headerData.baseFeePerGas = opts.parentBlock.header.calcNextBaseFee()
			}
		}

		if (typeof this.headerData.gasLimit === 'undefined') {
			if (this.headerData.number === vm.common.hardforkBlock('london')) {
				this.headerData.gasLimit = opts.parentBlock.header.gasLimit * 2n
			} else {
				this.headerData.gasLimit = opts.parentBlock.header.gasLimit
			}
		}

		if (this.vm.common.isActivatedEIP(4844) === true && typeof this.headerData.excessBlobGas === 'undefined') {
			this.headerData.excessBlobGas = opts.parentBlock.header.calcNextExcessBlobGas()
		}
	}

	/**
	 * Throws if the block has already been built or reverted.
	 */
	private checkStatus() {
		if (this.blockStatus.status === BuildStatus.Build) {
			throw new Error('Block has already been built')
		}
		if (this.blockStatus.status === BuildStatus.Reverted) {
			throw new Error('State has already been reverted')
		}
	}

	public getStatus(): BlockStatus {
		return this.blockStatus
	}

	/**
	 * Calculates and returns the transactionsTrie for the block.
	 */
	public async transactionsTrie() {
		return Block.genTransactionsTrieRoot(this.transactions, new Trie({ common: this.vm.common }))
	}

	/**
	 * Calculates and returns the logs bloom for the block.
	 */
	public logsBloom() {
		const bloom = new Bloom(undefined, this.vm.common)
		for (const txResult of this.transactionResults) {
			// Combine blooms via bitwise OR
			bloom.or(txResult.bloom)
		}
		return bloom.bitvector
	}

	/**
	 * Calculates and returns the receiptTrie for the block.
	 */
	public async receiptTrie() {
		if (this.transactionResults.length === 0) {
			return KECCAK256_RLP
		}
		const receiptTrie = new Trie({ common: this.vm.common })
		for (const [i, txResult] of this.transactionResults.entries()) {
			const tx = this.transactions[i]
			if (!tx) throw new Error('expected tx to exist')
			const encodedReceipt = encodeReceipt(txResult.receipt, tx.type)
			await receiptTrie.put(Rlp.encode(i), encodedReceipt)
		}
		return receiptTrie.root()
	}

	/**
	 * Adds the block miner reward to the coinbase account.
	 */
	private async rewardMiner() {
		const minerReward = this.vm.common.param('pow', 'minerReward')
		const reward = calculateMinerReward(minerReward, 0)
		const coinbase =
			this.headerData.coinbase !== undefined
				? new EthjsAddress(
						this.headerData.coinbase instanceof EthjsAddress
							? this.headerData.coinbase.toBytes()
							: typeof this.headerData.coinbase === 'string'
								? hexToBytes(this.headerData.coinbase as Hex)
								: this.headerData.coinbase,
					)
				: EthjsAddress.zero()
		await rewardAccount(this.vm.evm, coinbase, reward)
	}

	/**
	 * Adds the withdrawal amount to the withdrawal address
	 */
	private async processWithdrawals() {
		for (const withdrawal of this.withdrawals ?? []) {
			const { address, amount } = withdrawal
			// If there is no amount to add, skip touching the account
			// as per the implementation of other clients geth/nethermind
			// although this should never happen as no withdrawals with 0
			// amount should ever land up here.
			if (amount === 0n) continue
			// Withdrawal amount is represented in Gwei so needs to be
			// converted to wei
			await rewardAccount(this.vm.evm, address, parseGwei(amount.toString()))
		}
	}

	/**
	 * Run and add a transaction to the block being built.
	 * Please note that this modifies the state of the VM.
	 * Throws if the transaction's gasLimit is greater than
	 * the remaining gas in the block.
	 */
	async addTransaction(tx: TypedTransaction, { skipHardForkValidation }: { skipHardForkValidation?: boolean } = {}) {
		let _tx = tx
		this.checkStatus()

		if (!this.checkpointed) {
			await this.vm.evm.journal.checkpoint()
			this.checkpointed = true
		}

		// According to the Yellow Paper, a transaction's gas limit
		// cannot be greater than the remaining gas in the block
		const blockGasLimit = toType(this.headerData.gasLimit, TypeOutput.BigInt)

		const blobGasLimit = this.vm.common.param('gasConfig', 'maxblobGasPerBlock')
		const blobGasPerBlob = this.vm.common.param('gasConfig', 'blobGasPerBlob')

		const blockGasRemaining = blockGasLimit - this.gasUsed
		if (_tx.gasLimit > blockGasRemaining) {
			throw new Error('tx has a higher gas limit than the remaining gas in the block')
		}
		let blobGasUsed = undefined
		if (_tx instanceof BlobEIP4844Transaction) {
			if (this.blockOpts.common?.isActivatedEIP(4844) !== true) {
				throw Error('eip4844 not activated yet for adding a blob transaction')
			}
			const blobTx = _tx as BlobEIP4844Transaction

			// Guard against the case if a tx came into the pool without blobs i.e. network wrapper payload
			if (blobTx.blobs === undefined) {
				throw new Error('blobs missing for 4844 transaction')
			}

			if (this.blobGasUsed + BigInt(blobTx.numBlobs()) * blobGasPerBlob > blobGasLimit) {
				throw new Error('block blob gas limit reached')
			}

			blobGasUsed = this.blobGasUsed
		}
		const header = {
			...this.headerData,
			gasUsed: this.gasUsed,
			// correct excessBlobGas should already part of headerData used above
			blobGasUsed,
		}

		const blockData = { header, transactions: this.transactions }
		const block = Block.fromBlockData(blockData as any, this.blockOpts)

		const result = await runTx(this.vm)({ tx: _tx, block, skipHardForkValidation } as any)

		// If tx is a blob transaction, remove blobs/kzg commitments before adding to block per EIP-4844
		if (_tx instanceof BlobEIP4844Transaction) {
			const txData = _tx as BlobEIP4844Transaction
			this.blobGasUsed += BigInt(txData.blobVersionedHashes.length) * blobGasPerBlob
			_tx = BlobEIP4844Transaction.minimalFromNetworkWrapper(txData, {
				common: this.blockOpts.common,
			})
		}
		this.transactions.push(_tx)
		this.transactionResults.push(result)
		this.gasUsed += result.totalGasSpent
		this._minerValue += result.minerValue

		return result
	}

	/**
	 * Reverts the checkpoint on the StateManager to reset the state from any transactions that have been run.
	 */
	async revert() {
		if (this.checkpointed) {
			await this.vm.evm.journal.revert()
			this.checkpointed = false
		}
		this.blockStatus = { status: BuildStatus.Reverted }
	}

	/**
	 * This method returns the finalized block.
	 * It also:
	 *  - Assigns the reward for miner (PoW)
	 *  - Commits the checkpoint on the StateManager
	 *  - Sets the tip of the VM's blockchain to this block
	 * For PoW, optionally seals the block with params `nonce` and `mixHash`,
	 * which is validated along with the block number and difficulty by ethash.
	 * For PoA, please pass `blockOption.cliqueSigner` into the buildBlock constructor,
	 * as the signer will be awarded the txs amount spent on gas as they are added.
	 */
	async build(sealOpts?: SealBlockOpts) {
		this.checkStatus()
		const blockOpts = this.blockOpts
		const consensusType = this.vm.common.consensusType()

		if (consensusType === ConsensusType.ProofOfWork) {
			await this.rewardMiner()
		}
		await this.processWithdrawals()

		const stateRoot = await this.vm.stateManager.getStateRoot()
		const transactionsTrie = await this.transactionsTrie()
		const withdrawalsRoot = this.withdrawals
			? await Block.genWithdrawalsTrieRoot(this.withdrawals, new Trie({ common: this.vm.common }))
			: undefined
		const receiptTrie = await this.receiptTrie()
		const logsBloom = this.logsBloom()
		const gasUsed = this.gasUsed
		// timestamp should already be set in constructor
		const timestamp = this.headerData.timestamp ?? 0n

		let blobGasUsed = undefined
		if (this.vm.common.isActivatedEIP(4844) === true) {
			blobGasUsed = this.blobGasUsed
		}

		const headerData = {
			...this.headerData,
			stateRoot,
			transactionsTrie,
			...(withdrawalsRoot !== undefined ? { withdrawalsRoot } : {}),
			...(blobGasUsed !== undefined ? { blobGasUsed } : {}),
			receiptTrie,
			logsBloom,
			gasUsed,
			timestamp,
			// correct excessBlobGas should already be part of headerData used above
		}

		if (consensusType === ConsensusType.ProofOfWork) {
			headerData.nonce = sealOpts?.nonce ?? (headerData.nonce as Uint8Array)
			headerData.mixHash = sealOpts?.mixHash ?? (headerData.mixHash as Uint8Array)
		}

		const blockData = {
			header: headerData,
			transactions: this.transactions,
			withdrawals: this.withdrawals ?? [],
		}
		const block = Block.fromBlockData(blockData, blockOpts)

		block.transactions.forEach((tx) => {
			tx.hash = () => {
				try {
					return tx.hash()
				} catch (e) {
					return keccak256(tx.getHashedMessageToSign(), 'bytes')
				}
			}
		})

		if (this.blockOpts.putBlockIntoBlockchain === true) {
			await this.vm.blockchain.putBlock(block)
		}

		this.blockStatus = { status: BuildStatus.Build, block }
		if (this.checkpointed) {
			await this.vm.evm.journal.commit()
			this.checkpointed = false
		}

		return block
	}

	async initState() {
		if (this.vm.common.isActivatedEIP(4788)) {
			if (!this.checkpointed) {
				await this.vm.evm.journal.checkpoint()
				this.checkpointed = true
			}

			const { parentBeaconBlockRoot, timestamp } = this.headerData
			// timestamp should already be set in constructor
			const timestampBigInt = toType(timestamp ?? 0, TypeOutput.BigInt)
			const parentBeaconBlockRootBuf = toType(parentBeaconBlockRoot, TypeOutput.Uint8Array) ?? zeros(32)

			await accumulateParentBeaconBlockRoot(this.vm)(parentBeaconBlockRootBuf, timestampBigInt)
		}
		if (this.vm.common.isActivatedEIP(2935)) {
			if (!this.checkpointed) {
				await this.vm.evm.journal.checkpoint()
				this.checkpointed = true
			}

			const { parentHash, number } = this.headerData
			// timestamp should already be set in constructor
			const numberBigInt = toType(number ?? 0, TypeOutput.BigInt)
			const parentHashSanitized = toType(parentHash, TypeOutput.Uint8Array) ?? zeros(32)

			await accumulateParentBlockHash(this.vm)(numberBigInt, parentHashSanitized)
		}
	}
}

export type BuildBlock = (opts: BuildBlockOpts) => Promise<BlockBuilder>

export const buildBlock =
	(vm: BaseVm): BuildBlock =>
	async (opts) => {
		const blockBuilder = new BlockBuilder(vm, opts)
		await blockBuilder.initState()
		return blockBuilder
	}