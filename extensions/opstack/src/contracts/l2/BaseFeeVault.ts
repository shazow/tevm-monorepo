/// Generated file. Do not edit.

import { createScript } from '@tevm/contract'
import { type Hex } from '@tevm/utils'

/**
 * Creates a BaseFeeVault contract instance from a chainId
 * Currently only supports chainId 10
 * @example
 * import { createBaseFeeVault } from '@tevm/opstack'
 * const BaseFeeVault = createBaseFeeVault()
 */
export const createBaseFeeVault = (chainId: 10 = 10) =>
	createScript({
		name: 'BaseFeeVault',
		deployedBytecode: BaseFeeVaultDeployedBytecode,
		bytecode: BaseFeeVaultBytecode,
		humanReadableAbi: BaseFeeVaultHumanReadableAbi,
	}).withAddress(BaseFeeVaultAddresses[chainId])

export const BaseFeeVaultAddresses = {
	'10': '0x4200000000000000000000000000000000000019',
} as const

export const BaseFeeVaultBytecode =
	'0x60e060405234801561001057600080fd5b506040516108d13803806108d183398101604081905261002f91610079565b6001600160a01b03831660a0526080829052828282806001811115610056576100566100cc565b60c081600181111561006a5761006a6100cc565b815250505050505050506100e2565b60008060006060848603121561008e57600080fd5b83516001600160a01b03811681146100a557600080fd5b602085015160408601519194509250600281106100c157600080fd5b809150509250925092565b634e487b7160e01b600052602160045260246000fd5b60805160a05160c051610790610141600039600081816101760152818161038901526103c40152600081816087015281816102d801528181610367015281816103fd01526105640152600081816101b701526101db01526107906000f3fe6080604052600436106100695760003560e01c806384411d651161004357806384411d6514610140578063d0e12f9014610164578063d3e5792b146101a557600080fd5b80630d9019e1146100755780633ccfd60b146100d357806354fd4d50146100ea57600080fd5b3661007057005b600080fd5b34801561008157600080fd5b506100a97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100df57600080fd5b506100e86101d9565b005b3480156100f657600080fd5b506101336040518060400160405280600581526020017f312e342e3100000000000000000000000000000000000000000000000000000081525081565b6040516100ca9190610630565b34801561014c57600080fd5b5061015660005481565b6040519081526020016100ca565b34801561017057600080fd5b506101987f000000000000000000000000000000000000000000000000000000000000000081565b6040516100ca91906106b4565b3480156101b157600080fd5b506101567f000000000000000000000000000000000000000000000000000000000000000081565b7f00000000000000000000000000000000000000000000000000000000000000004710156102b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604a60248201527f4665655661756c743a207769746864726177616c20616d6f756e74206d75737460448201527f2062652067726561746572207468616e206d696e696d756d207769746864726160648201527f77616c20616d6f756e7400000000000000000000000000000000000000000000608482015260a4015b60405180910390fd5b6000479050806000808282546102ca91906106c8565b9091555050604080518281527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166020820152338183015290517fc8a211cc64b6ed1b50595a9fcb1932b6d1e5a6e8ef15b60e5b1f988ea9086bba9181900360600190a17f38e04cbeb8c10f8f568618aa75be0f10b6729b8b4237743b4de20cbcde2839ee817f0000000000000000000000000000000000000000000000000000000000000000337f00000000000000000000000000000000000000000000000000000000000000006040516103b89493929190610707565b60405180910390a160017f000000000000000000000000000000000000000000000000000000000000000060018111156103f4576103f461064a565b0361050d5760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610473576040519150601f19603f3d011682016040523d82523d6000602084013e610478565b606091505b5050905080610509576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f4665655661756c743a206661696c656420746f2073656e642045544820746f2060448201527f4c322066656520726563697069656e740000000000000000000000000000000060648201526084016102ab565b5050565b604080516020810182526000815290517fe11013dd0000000000000000000000000000000000000000000000000000000081527342000000000000000000000000000000000000109163e11013dd918491610590917f0000000000000000000000000000000000000000000000000000000000000000916188b891600401610748565b6000604051808303818588803b1580156105a957600080fd5b505af11580156105bd573d6000803e3d6000fd5b505050505050565b6000815180845260005b818110156105eb576020818501810151868301820152016105cf565b818111156105fd576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061064360208301846105c5565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600281106106b0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b602081016106c28284610679565b92915050565b60008219821115610702577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b84815273ffffffffffffffffffffffffffffffffffffffff8481166020830152831660408201526080810161073f6060830184610679565b95945050505050565b73ffffffffffffffffffffffffffffffffffffffff8416815263ffffffff8316602082015260606040820152600061073f60608301846105c556fea164736f6c634300080f000a' as Hex

export const BaseFeeVaultDeployedBytecode =
	'0x6080604052600436106100695760003560e01c806384411d651161004357806384411d6514610140578063d0e12f9014610164578063d3e5792b146101a557600080fd5b80630d9019e1146100755780633ccfd60b146100d357806354fd4d50146100ea57600080fd5b3661007057005b600080fd5b34801561008157600080fd5b506100a97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100df57600080fd5b506100e86101d9565b005b3480156100f657600080fd5b506101336040518060400160405280600581526020017f312e342e3100000000000000000000000000000000000000000000000000000081525081565b6040516100ca9190610630565b34801561014c57600080fd5b5061015660005481565b6040519081526020016100ca565b34801561017057600080fd5b506101987f000000000000000000000000000000000000000000000000000000000000000081565b6040516100ca91906106b4565b3480156101b157600080fd5b506101567f000000000000000000000000000000000000000000000000000000000000000081565b7f00000000000000000000000000000000000000000000000000000000000000004710156102b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604a60248201527f4665655661756c743a207769746864726177616c20616d6f756e74206d75737460448201527f2062652067726561746572207468616e206d696e696d756d207769746864726160648201527f77616c20616d6f756e7400000000000000000000000000000000000000000000608482015260a4015b60405180910390fd5b6000479050806000808282546102ca91906106c8565b9091555050604080518281527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166020820152338183015290517fc8a211cc64b6ed1b50595a9fcb1932b6d1e5a6e8ef15b60e5b1f988ea9086bba9181900360600190a17f38e04cbeb8c10f8f568618aa75be0f10b6729b8b4237743b4de20cbcde2839ee817f0000000000000000000000000000000000000000000000000000000000000000337f00000000000000000000000000000000000000000000000000000000000000006040516103b89493929190610707565b60405180910390a160017f000000000000000000000000000000000000000000000000000000000000000060018111156103f4576103f461064a565b0361050d5760007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610473576040519150601f19603f3d011682016040523d82523d6000602084013e610478565b606091505b5050905080610509576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f4665655661756c743a206661696c656420746f2073656e642045544820746f2060448201527f4c322066656520726563697069656e740000000000000000000000000000000060648201526084016102ab565b5050565b604080516020810182526000815290517fe11013dd0000000000000000000000000000000000000000000000000000000081527342000000000000000000000000000000000000109163e11013dd918491610590917f0000000000000000000000000000000000000000000000000000000000000000916188b891600401610748565b6000604051808303818588803b1580156105a957600080fd5b505af11580156105bd573d6000803e3d6000fd5b505050505050565b6000815180845260005b818110156105eb576020818501810151868301820152016105cf565b818111156105fd576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061064360208301846105c5565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600281106106b0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b602081016106c28284610679565b92915050565b60008219821115610702577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b84815273ffffffffffffffffffffffffffffffffffffffff8481166020830152831660408201526080810161073f6060830184610679565b95945050505050565b73ffffffffffffffffffffffffffffffffffffffff8416815263ffffffff8316602082015260606040820152600061073f60608301846105c556fea164736f6c634300080f000a' as Hex

export const BaseFeeVaultHumanReadableAbi = [
	'constructor(address _recipient, uint256 _minWithdrawalAmount, uint8 _withdrawalNetwork)',
	'receive() external payable',
	'function MIN_WITHDRAWAL_AMOUNT() view returns (uint256)',
	'function RECIPIENT() view returns (address)',
	'function WITHDRAWAL_NETWORK() view returns (uint8)',
	'function totalProcessed() view returns (uint256)',
	'function version() view returns (string)',
	'function withdraw()',
	'event Withdrawal(uint256 value, address to, address from)',
	'event Withdrawal(uint256 value, address to, address from, uint8 withdrawalNetwork)',
] as const

export const BaseFeeVaultAbi = [
	{
		type: 'constructor',
		inputs: [
			{
				name: '_recipient',
				type: 'address',
				internalType: 'address',
			},
			{
				name: '_minWithdrawalAmount',
				type: 'uint256',
				internalType: 'uint256',
			},
			{
				name: '_withdrawalNetwork',
				type: 'uint8',
				internalType: 'enum FeeVault.WithdrawalNetwork',
			},
		],
		stateMutability: 'nonpayable',
	},
	{
		type: 'receive',
		stateMutability: 'payable',
	},
	{
		type: 'function',
		name: 'MIN_WITHDRAWAL_AMOUNT',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'RECIPIENT',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'address',
				internalType: 'address',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'WITHDRAWAL_NETWORK',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'uint8',
				internalType: 'enum FeeVault.WithdrawalNetwork',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'totalProcessed',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'uint256',
				internalType: 'uint256',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'version',
		inputs: [],
		outputs: [
			{
				name: '',
				type: 'string',
				internalType: 'string',
			},
		],
		stateMutability: 'view',
	},
	{
		type: 'function',
		name: 'withdraw',
		inputs: [],
		outputs: [],
		stateMutability: 'nonpayable',
	},
	{
		type: 'event',
		name: 'Withdrawal',
		inputs: [
			{
				name: 'value',
				type: 'uint256',
				indexed: false,
				internalType: 'uint256',
			},
			{
				name: 'to',
				type: 'address',
				indexed: false,
				internalType: 'address',
			},
			{
				name: 'from',
				type: 'address',
				indexed: false,
				internalType: 'address',
			},
		],
		anonymous: false,
	},
	{
		type: 'event',
		name: 'Withdrawal',
		inputs: [
			{
				name: 'value',
				type: 'uint256',
				indexed: false,
				internalType: 'uint256',
			},
			{
				name: 'to',
				type: 'address',
				indexed: false,
				internalType: 'address',
			},
			{
				name: 'from',
				type: 'address',
				indexed: false,
				internalType: 'address',
			},
			{
				name: 'withdrawalNetwork',
				type: 'uint8',
				indexed: false,
				internalType: 'enum FeeVault.WithdrawalNetwork',
			},
		],
		anonymous: false,
	},
] as const