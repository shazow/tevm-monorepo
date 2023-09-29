import { addresses } from '../addresses'
import { WagmiMintExample } from '../contracts/WagmiMintExample.sol'
import { useReducer } from 'react'
import { useAccount, useBlockNumber, useContractEvent } from 'wagmi'

export const WagmiEvents = () => {
	const { address } = useAccount()

	const { data: blockNumber } = useBlockNumber()

	// TODO add types to EvmtsContract type
	const [events, concatEvents] = useReducer(
		(events: any[], newEvents: any[]) => [...events, ...newEvents],
		[] as any[],
	)

	/**
	 * ABI of events can be found at events.Foo
	 * - Don't call fn and it is an object without args
	 * - Call fn with args and fromBlock etc. and it returns an object with args
	 */
	const transferFromEvents = WagmiMintExample.events.Transfer({
		fromBlock: blockNumber && blockNumber - BigInt(1_000),
		args: {
			from: address,
		},
	})
	const transferToEvents = WagmiMintExample.events.Transfer({
		fromBlock: blockNumber && blockNumber - BigInt(1_000),
		args: {
			to: address,
		},
	})

	useContractEvent({
		...transferFromEvents,
		address: addresses[420],
		listener: (event) => {
			concatEvents([event])
		},
	})
	useContractEvent({
		...transferToEvents,
		address: addresses[420],
		listener: (event) => {
			concatEvents([event])
		},
	})

	return (
		<div>
			<div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
				{events.map((event, i) => {
					return (
						<div key={i}>
							<div>Event {i}</div>
							<div>{JSON.stringify(event)}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
