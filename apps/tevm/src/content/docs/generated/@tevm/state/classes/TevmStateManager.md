---
editUrl: false
next: false
prev: false
title: "TevmStateManager"
---

A state manager that will fetch state from a remote rpc provider
future requests. Used internally in `MemoryTevm`

## Example

```ts
import { TevmStateManager } from '@tevm/state'
import { createMemoryTevm } from 'tevm/vm'

const stateManager = new TevmStateManager({
  rpcUrl: 'https://mainnet.optimism.io',
  blockTag: 'latest'
})
```

## Implements

- [`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/)

## Constructors

### new TevmStateManager(opts)

> **new TevmStateManager**(`opts`): [`TevmStateManager`](/generated/tevm/state/classes/tevmstatemanager/)

#### Parameters

▪ **opts**: [`TevmStateManagerOpts`](/generated/tevm/state/interfaces/tevmstatemanageropts/)

#### Source

[vm/state/src/TevmStateManager.ts:63](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L63)

## Properties

### DEBUG

> **`protected`** **DEBUG**: `boolean`

#### Source

[vm/state/src/TevmStateManager.ts:61](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L61)

***

### \_accountCache

> **`protected`** **\_accountCache**: `AccountCache`

#### Source

[vm/state/src/TevmStateManager.ts:58](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L58)

***

### \_blockTag

> **`protected`** **\_blockTag**: `object` \| `object`

#### Source

[vm/state/src/TevmStateManager.ts:57](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L57)

***

### \_contractCache

> **`protected`** **\_contractCache**: `Map`\<`string`, `Uint8Array`\>

#### Source

[vm/state/src/TevmStateManager.ts:55](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L55)

***

### \_debug

> **`protected`** **\_debug**: `Debugger`

#### Source

[vm/state/src/TevmStateManager.ts:60](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L60)

***

### \_storageCache

> **`protected`** **\_storageCache**: `StorageCache`

#### Source

[vm/state/src/TevmStateManager.ts:56](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L56)

***

### client

> **`protected`** **client**: `object`

#### Type declaration

##### account

> **account**: `undefined`

The Account of the Client.

##### batch

> **batch**?: `object`

Flags for batch settings.

##### batch.multicall

> **batch.multicall**?: `boolean` \| `object`

Toggle to enable `eth_call` multicall aggregation.

##### cacheTime

> **cacheTime**: `number`

Time (in ms) that cached data will remain in memory.

##### call

> **call**: (`parameters`) => `Promise`\<`CallReturnType`\>

Executes a new message call immediately without submitting a transaction to the network.

- Docs: https://viem.sh/docs/actions/public/call.html
- JSON-RPC Methods: [`eth_call`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call)

###### Param

[CallParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const data = await client.call({
  account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
  data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
})
```

Executes a new message call immediately without submitting a transaction to the network.

- Docs: https://viem.sh/docs/actions/public/call.html
- JSON-RPC Methods: [`eth_call`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_call)

###### Parameters

▪ **parameters**: `CallParameters`\<`undefined` \| `Chain`\>

###### Returns

The call data. [CallReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const data = await client.call({
  account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
  data: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
})
```

##### chain

> **chain**: `undefined` \| `Chain`

Chain for the client.

##### createBlockFilter

> **createBlockFilter**: () => `Promise`\<`object`\>

Creates a Filter to listen for new block hashes that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges.html).

- Docs: https://viem.sh/docs/actions/public/createBlockFilter.html
- JSON-RPC Methods: [`eth_newBlockFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newBlockFilter)

###### Example

```ts
import { createPublicClient, createBlockFilter, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await createBlockFilter(client)
// { id: "0x345a6572337856574a76364e457a4366", type: 'block' }
```

Creates a Filter to listen for new block hashes that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges.html).

- Docs: https://viem.sh/docs/actions/public/createBlockFilter.html
- JSON-RPC Methods: [`eth_newBlockFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newBlockFilter)

###### Returns

Filter. [CreateBlockFilterReturnType]([object Object])

###### Example

```ts
import { createPublicClient, createBlockFilter, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await createBlockFilter(client)
// { id: "0x345a6572337856574a76364e457a4366", type: 'block' }
```

##### createContractEventFilter

> **createContractEventFilter**: \<`TAbi`, `TEventName`, `TArgs`, `TStrict`, `TFromBlock`, `TToBlock`\>(`args`) => `Promise`\<`CreateContractEventFilterReturnType`\<`TAbi`, `TEventName`, `TArgs`, `TStrict`, `TFromBlock`, `TToBlock`\>\>

Creates a Filter to retrieve event logs that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges.html) or [`getFilterLogs`](https://viem.sh/docs/actions/public/getFilterLogs.html).

- Docs: https://viem.sh/docs/contract/createContractEventFilter.html

###### Param

[CreateContractEventFilterParameters]([object Object])

###### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createContractEventFilter({
  abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
})
```

Creates a Filter to retrieve event logs that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges.html) or [`getFilterLogs`](https://viem.sh/docs/actions/public/getFilterLogs.html).

- Docs: https://viem.sh/docs/contract/createContractEventFilter.html

###### Type parameters

▪ **TAbi** extends `Abi` \| readonly `unknown`[]

▪ **TEventName** extends `undefined` \| `string`

▪ **TArgs** extends `undefined` \| readonly `unknown`[] \| `Record`\<`string`, `unknown`\>

▪ **TStrict** extends `undefined` \| `boolean` = `undefined`

▪ **TFromBlock** extends `undefined` \| `bigint` \| `BlockTag` = `undefined`

▪ **TToBlock** extends `undefined` \| `bigint` \| `BlockTag` = `undefined`

###### Parameters

▪ **args**: `CreateContractEventFilterParameters`\<`TAbi`, `TEventName`, `TArgs`, `TStrict`, `TFromBlock`, `TToBlock`\>

[CreateContractEventFilterParameters]([object Object])

###### Returns

[`Filter`](https://viem.sh/docs/glossary/types.html#filter). [CreateContractEventFilterReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createContractEventFilter({
  abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
})
```

##### createEventFilter

> **createEventFilter**: \<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`, `_EventName`, `_Args`\>(`args`?) => `Promise`\<`{ [K in string | number | symbol]: Filter<"event", TAbiEvents, _EventName, _Args, TStrict, TFromBlock, TToBlock>[K] }`\>

Creates a [`Filter`](https://viem.sh/docs/glossary/types.html#filter) to listen for new events that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges.html).

- Docs: https://viem.sh/docs/actions/public/createEventFilter.html
- JSON-RPC Methods: [`eth_newFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter)

###### Param

[CreateEventFilterParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createEventFilter({
  address: '0xfba3912ca04dd458c843e2ee08967fc04f3579c2',
})
```

Creates a [`Filter`](https://viem.sh/docs/glossary/types.html#filter) to listen for new events that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges.html).

- Docs: https://viem.sh/docs/actions/public/createEventFilter.html
- JSON-RPC Methods: [`eth_newFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter)

###### Type parameters

▪ **TAbiEvent** extends `undefined` \| `AbiEvent` = `undefined`

▪ **TAbiEvents** extends `undefined` \| readonly `unknown`[] \| readonly `AbiEvent`[] = `TAbiEvent` extends `AbiEvent` ? [`TAbiEvent`] : `undefined`

▪ **TStrict** extends `undefined` \| `boolean` = `undefined`

▪ **TFromBlock** extends `undefined` \| `bigint` \| `BlockTag` = `undefined`

▪ **TToBlock** extends `undefined` \| `bigint` \| `BlockTag` = `undefined`

▪ **_EventName** extends `undefined` \| `string` = `MaybeAbiEventName`\<`TAbiEvent`\>

▪ **_Args** extends `undefined` \| readonly `unknown`[] \| `Record`\<`string`, `unknown`\> = `undefined`

###### Parameters

▪ **args?**: `CreateEventFilterParameters`\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`, `_EventName`, `_Args`\>

[CreateEventFilterParameters]([object Object])

###### Returns

[`Filter`](https://viem.sh/docs/glossary/types.html#filter). [CreateEventFilterReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createEventFilter({
  address: '0xfba3912ca04dd458c843e2ee08967fc04f3579c2',
})
```

##### createPendingTransactionFilter

> **createPendingTransactionFilter**: () => `Promise`\<`object`\>

Creates a Filter to listen for new pending transaction hashes that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges.html).

- Docs: https://viem.sh/docs/actions/public/createPendingTransactionFilter.html
- JSON-RPC Methods: [`eth_newPendingTransactionFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter)

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createPendingTransactionFilter()
// { id: "0x345a6572337856574a76364e457a4366", type: 'transaction' }
```

Creates a Filter to listen for new pending transaction hashes that can be used with [`getFilterChanges`](https://viem.sh/docs/actions/public/getFilterChanges.html).

- Docs: https://viem.sh/docs/actions/public/createPendingTransactionFilter.html
- JSON-RPC Methods: [`eth_newPendingTransactionFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter)

###### Returns

[`Filter`](https://viem.sh/docs/glossary/types.html#filter). [CreateBlockFilterReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createPendingTransactionFilter()
// { id: "0x345a6572337856574a76364e457a4366", type: 'transaction' }
```

##### estimateContractGas

> **estimateContractGas**: \<`TChain`, `abi`, `functionName`, `args`\>(`args`) => `Promise`\<`bigint`\>

Estimates the gas required to successfully execute a contract write function call.

- Docs: https://viem.sh/docs/contract/estimateContractGas.html

###### Remarks

Internally, uses a [Public Client](https://viem.sh/docs/clients/public.html) to call the [`estimateGas` action](https://viem.sh/docs/actions/public/estimateGas.html) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData.html).

###### Param

[EstimateContractGasParameters]([object Object])

###### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const gas = await client.estimateContractGas({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint() public']),
  functionName: 'mint',
  account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
})
```

Estimates the gas required to successfully execute a contract write function call.

- Docs: https://viem.sh/docs/contract/estimateContractGas.html

###### Type parameters

▪ **TChain** extends `undefined` \| `Chain`

▪ **abi** extends `Abi` \| readonly `unknown`[]

▪ **functionName** extends `string`

▪ **args** extends `unknown`

###### Parameters

▪ **args**: `EstimateContractGasParameters`\<`abi`, `functionName`, `args`, `TChain`\>

[EstimateContractGasParameters]([object Object])

###### Returns

The gas estimate (in wei). [EstimateContractGasReturnType]([object Object])

###### Remarks

Internally, uses a [Public Client](https://viem.sh/docs/clients/public.html) to call the [`estimateGas` action](https://viem.sh/docs/actions/public/estimateGas.html) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData.html).

###### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const gas = await client.estimateContractGas({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint() public']),
  functionName: 'mint',
  account: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
})
```

##### estimateFeesPerGas

> **estimateFeesPerGas**: \<`TChainOverride`, `TType`\>(`args`?) => `Promise`\<`EstimateFeesPerGasReturnType`\>

Returns an estimate for the fees per gas for a transaction to be included
in the next block.

- Docs: https://viem.sh/docs/actions/public/estimateFeesPerGas.html

###### Param

Client to use

###### Param

[EstimateFeesPerGasParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const maxPriorityFeePerGas = await client.estimateFeesPerGas()
// { maxFeePerGas: ..., maxPriorityFeePerGas: ... }
```

Returns an estimate for the fees per gas for a transaction to be included
in the next block.

- Docs: https://viem.sh/docs/actions/public/estimateFeesPerGas.html

###### Type parameters

▪ **TChainOverride** extends `undefined` \| `Chain` = `undefined`

▪ **TType** extends `FeeValuesType` = `"eip1559"`

###### Parameters

▪ **args?**: `EstimateFeesPerGasParameters`\<`undefined` \| `Chain`, `TChainOverride`, `TType`\>

###### Returns

An estimate (in wei) for the fees per gas. [EstimateFeesPerGasReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const maxPriorityFeePerGas = await client.estimateFeesPerGas()
// { maxFeePerGas: ..., maxPriorityFeePerGas: ... }
```

##### estimateGas

> **estimateGas**: (`args`) => `Promise`\<`bigint`\>

Estimates the gas necessary to complete a transaction without submitting it to the network.

- Docs: https://viem.sh/docs/actions/public/estimateGas.html
- JSON-RPC Methods: [`eth_estimateGas`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_estimategas)

###### Param

[EstimateGasParameters]([object Object])

###### Example

```ts
import { createPublicClient, http, parseEther } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const gasEstimate = await client.estimateGas({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  value: parseEther('1'),
})
```

Estimates the gas necessary to complete a transaction without submitting it to the network.

- Docs: https://viem.sh/docs/actions/public/estimateGas.html
- JSON-RPC Methods: [`eth_estimateGas`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_estimategas)

###### Parameters

▪ **args**: `EstimateGasParameters`\<`undefined` \| `Chain`\>

[EstimateGasParameters]([object Object])

###### Returns

The gas estimate (in wei). [EstimateGasReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http, parseEther } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const gasEstimate = await client.estimateGas({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  value: parseEther('1'),
})
```

##### estimateMaxPriorityFeePerGas

> **estimateMaxPriorityFeePerGas**: \<`TChainOverride`\>(`args`?) => `Promise`\<`bigint`\>

Returns an estimate for the max priority fee per gas (in wei) for a transaction
to be included in the next block.

- Docs: https://viem.sh/docs/actions/public/estimateMaxPriorityFeePerGas.html

###### Param

Client to use

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const maxPriorityFeePerGas = await client.estimateMaxPriorityFeePerGas()
// 10000000n
```

Returns an estimate for the max priority fee per gas (in wei) for a transaction
to be included in the next block.

- Docs: https://viem.sh/docs/actions/public/estimateMaxPriorityFeePerGas.html

###### Type parameters

▪ **TChainOverride** extends `undefined` \| `Chain` = `undefined`

###### Parameters

▪ **args?**: `object`

▪ **args.chain?**: `null` \| `TChainOverride`

###### Returns

An estimate (in wei) for the max priority fee per gas. [EstimateMaxPriorityFeePerGasReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const maxPriorityFeePerGas = await client.estimateMaxPriorityFeePerGas()
// 10000000n
```

##### extend

> **extend**: \<`client`\>(`fn`) => `Client`\<`Transport`, `undefined` \| `Chain`, `undefined`, `PublicRpcSchema`, `{ [K in string | number | symbol]: client[K] }` & `PublicActions`\<`Transport`, `undefined` \| `Chain`\>\>

###### Type parameters

▪ **client** extends `object` & `Partial`\<`ExtendableProtectedActions`\>

###### Parameters

▪ **fn**: (`client`) => `client`

##### getBalance

> **getBalance**: (`args`) => `Promise`\<`bigint`\>

Returns the balance of an address in wei.

- Docs: https://viem.sh/docs/actions/public/getBalance.html
- JSON-RPC Methods: [`eth_getBalance`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getbalance)

###### Remarks

You can convert the balance to ether units with [`formatEther`](https://viem.sh/docs/utilities/formatEther.html).

```ts
const balance = await getBalance(client, {
  address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  blockTag: 'safe'
})
const balanceAsEther = formatEther(balance)
// "6.942"
```

###### Param

[GetBalanceParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const balance = await client.getBalance({
  address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
// 10000000000000000000000n (wei)
```

Returns the balance of an address in wei.

- Docs: https://viem.sh/docs/actions/public/getBalance.html
- JSON-RPC Methods: [`eth_getBalance`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getbalance)

###### Parameters

▪ **args**: `GetBalanceParameters`

[GetBalanceParameters]([object Object])

###### Returns

The balance of the address in wei. [GetBalanceReturnType]([object Object])

###### Remarks

You can convert the balance to ether units with [`formatEther`](https://viem.sh/docs/utilities/formatEther.html).

```ts
const balance = await getBalance(client, {
  address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  blockTag: 'safe'
})
const balanceAsEther = formatEther(balance)
// "6.942"
```

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const balance = await client.getBalance({
  address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
// 10000000000000000000000n (wei)
```

##### getBlock

> **getBlock**: \<`TIncludeTransactions`, `TBlockTag`\>(`args`?) => `Promise`\<`GetBlockReturnType`\<`undefined` \| `Chain`, `TIncludeTransactions`, `TBlockTag`\>\>

Returns information about a block at a block number, hash, or tag.

- Docs: https://viem.sh/docs/actions/public/getBlock.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks/fetching-blocks
- JSON-RPC Methods:
  - Calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber) for `blockNumber` & `blockTag`.
  - Calls [`eth_getBlockByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbyhash) for `blockHash`.

###### Param

[GetBlockParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const block = await client.getBlock()
```

Returns information about a block at a block number, hash, or tag.

- Docs: https://viem.sh/docs/actions/public/getBlock.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks/fetching-blocks
- JSON-RPC Methods:
  - Calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber) for `blockNumber` & `blockTag`.
  - Calls [`eth_getBlockByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbyhash) for `blockHash`.

###### Type parameters

▪ **TIncludeTransactions** extends `boolean` = `false`

▪ **TBlockTag** extends `BlockTag` = `"latest"`

###### Parameters

▪ **args?**: `GetBlockParameters`\<`TIncludeTransactions`, `TBlockTag`\>

[GetBlockParameters]([object Object])

###### Returns

Information about the block. [GetBlockReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const block = await client.getBlock()
```

##### getBlockNumber

> **getBlockNumber**: (`args`?) => `Promise`\<`bigint`\>

Returns the number of the most recent block seen.

- Docs: https://viem.sh/docs/actions/public/getBlockNumber.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks/fetching-blocks
- JSON-RPC Methods: [`eth_blockNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber)

###### Param

[GetBlockNumberParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const blockNumber = await client.getBlockNumber()
// 69420n
```

Returns the number of the most recent block seen.

- Docs: https://viem.sh/docs/actions/public/getBlockNumber.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks/fetching-blocks
- JSON-RPC Methods: [`eth_blockNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber)

###### Parameters

▪ **args?**: `GetBlockNumberParameters`

[GetBlockNumberParameters]([object Object])

###### Returns

The number of the block. [GetBlockNumberReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const blockNumber = await client.getBlockNumber()
// 69420n
```

##### getBlockTransactionCount

> **getBlockTransactionCount**: (`args`?) => `Promise`\<`number`\>

Returns the number of Transactions at a block number, hash, or tag.

- Docs: https://viem.sh/docs/actions/public/getBlockTransactionCount.html
- JSON-RPC Methods:
  - Calls [`eth_getBlockTransactionCountByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbynumber) for `blockNumber` & `blockTag`.
  - Calls [`eth_getBlockTransactionCountByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbyhash) for `blockHash`.

###### Param

[GetBlockTransactionCountParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const count = await client.getBlockTransactionCount()
```

Returns the number of Transactions at a block number, hash, or tag.

- Docs: https://viem.sh/docs/actions/public/getBlockTransactionCount.html
- JSON-RPC Methods:
  - Calls [`eth_getBlockTransactionCountByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbynumber) for `blockNumber` & `blockTag`.
  - Calls [`eth_getBlockTransactionCountByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblocktransactioncountbyhash) for `blockHash`.

###### Parameters

▪ **args?**: `GetBlockTransactionCountParameters`

[GetBlockTransactionCountParameters]([object Object])

###### Returns

The block transaction count. [GetBlockTransactionCountReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const count = await client.getBlockTransactionCount()
```

##### getBytecode

> **getBytecode**: (`args`) => `Promise`\<`GetBytecodeReturnType`\>

Retrieves the bytecode at an address.

- Docs: https://viem.sh/docs/contract/getBytecode.html
- JSON-RPC Methods: [`eth_getCode`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getcode)

###### Param

[GetBytecodeParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const code = await client.getBytecode({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
})
```

Retrieves the bytecode at an address.

- Docs: https://viem.sh/docs/contract/getBytecode.html
- JSON-RPC Methods: [`eth_getCode`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getcode)

###### Parameters

▪ **args**: `GetBytecodeParameters`

[GetBytecodeParameters]([object Object])

###### Returns

The contract's bytecode. [GetBytecodeReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const code = await client.getBytecode({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
})
```

##### getChainId

> **getChainId**: () => `Promise`\<`number`\>

Returns the chain ID associated with the current network.

- Docs: https://viem.sh/docs/actions/public/getChainId.html
- JSON-RPC Methods: [`eth_chainId`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_chainid)

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const chainId = await client.getChainId()
// 1
```

Returns the chain ID associated with the current network.

- Docs: https://viem.sh/docs/actions/public/getChainId.html
- JSON-RPC Methods: [`eth_chainId`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_chainid)

###### Returns

The current chain ID. [GetChainIdReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const chainId = await client.getChainId()
// 1
```

##### getContractEvents

> **getContractEvents**: \<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>(`args`) => `Promise`\<`GetContractEventsReturnType`\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>\>

Returns a list of event logs emitted by a contract.

- Docs: https://viem.sh/docs/actions/public/getContractEvents.html
- JSON-RPC Methods: [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)

###### Param

Client to use

###### Param

[GetContractEventsParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { wagmiAbi } from './abi'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const logs = await client.getContractEvents(client, {
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 abi: wagmiAbi,
 eventName: 'Transfer'
})
```

Returns a list of event logs emitted by a contract.

- Docs: https://viem.sh/docs/actions/public/getContractEvents.html
- JSON-RPC Methods: [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)

###### Type parameters

▪ **abi** extends `Abi` \| readonly `unknown`[]

▪ **eventName** extends `undefined` \| `string` = `undefined`

▪ **strict** extends `undefined` \| `boolean` = `undefined`

▪ **fromBlock** extends `undefined` \| `bigint` \| `BlockTag` = `undefined`

▪ **toBlock** extends `undefined` \| `bigint` \| `BlockTag` = `undefined`

###### Parameters

▪ **args**: `GetContractEventsParameters`\<`abi`, `eventName`, `strict`, `fromBlock`, `toBlock`\>

###### Returns

A list of event logs. [GetContractEventsReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { wagmiAbi } from './abi'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const logs = await client.getContractEvents(client, {
 address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
 abi: wagmiAbi,
 eventName: 'Transfer'
})
```

##### getEnsAddress

> **getEnsAddress**: (`args`) => `Promise`\<`GetEnsAddressReturnType`\>

Gets address for ENS name.

- Docs: https://viem.sh/docs/ens/actions/getEnsAddress.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

###### Remarks

Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.

Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize.html) function for this.

###### Param

[GetEnsAddressParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const ensAddress = await client.getEnsAddress({
  name: normalize('wevm.eth'),
})
// '0xd2135CfB216b74109775236E36d4b433F1DF507B'
```

Gets address for ENS name.

- Docs: https://viem.sh/docs/ens/actions/getEnsAddress.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

###### Parameters

▪ **args**: `object`

[GetEnsAddressParameters]([object Object])

▪ **args.blockNumber?**: `bigint`

The balance of the account at a block number.

▪ **args.blockTag?**: `BlockTag`

The balance of the account at a block tag.

**Default**

```ts
'latest'
```

▪ **args.coinType?**: `number`

ENSIP-9 compliant coinType used to resolve addresses for other chains

▪ **args.name**: `string`

Name to get the address for.

▪ **args.universalResolverAddress?**: \`0x${string}\`

Address of ENS Universal Resolver Contract.

###### Returns

Address for ENS name or `null` if not found. [GetEnsAddressReturnType]([object Object])

###### Remarks

Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.

Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize.html) function for this.

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const ensAddress = await client.getEnsAddress({
  name: normalize('wevm.eth'),
})
// '0xd2135CfB216b74109775236E36d4b433F1DF507B'
```

##### getEnsAvatar

> **getEnsAvatar**: (`args`) => `Promise`\<`GetEnsAvatarReturnType`\>

Gets the avatar of an ENS name.

- Docs: https://viem.sh/docs/ens/actions/getEnsAvatar.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

###### Remarks

Calls [`getEnsText`](https://viem.sh/docs/ens/actions/getEnsText.html) with `key` set to `'avatar'`.

Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize.html) function for this.

###### Param

[GetEnsAvatarParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const ensAvatar = await client.getEnsAvatar({
  name: normalize('wevm.eth'),
})
// 'https://ipfs.io/ipfs/Qma8mnp6xV3J2cRNf3mTth5C8nV11CAnceVinc3y8jSbio'
```

Gets the avatar of an ENS name.

- Docs: https://viem.sh/docs/ens/actions/getEnsAvatar.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

###### Parameters

▪ **args**: `object`

[GetEnsAvatarParameters]([object Object])

▪ **args.blockNumber?**: `bigint`

The balance of the account at a block number.

▪ **args.blockTag?**: `BlockTag`

The balance of the account at a block tag.

**Default**

```ts
'latest'
```

▪ **args.gatewayUrls?**: `AssetGatewayUrls`

Gateway urls to resolve IPFS and/or Arweave assets.

▪ **args.name**: `string`

ENS name to get Text for.

▪ **args.universalResolverAddress?**: \`0x${string}\`

Address of ENS Universal Resolver Contract.

###### Returns

Avatar URI or `null` if not found. [GetEnsAvatarReturnType]([object Object])

###### Remarks

Calls [`getEnsText`](https://viem.sh/docs/ens/actions/getEnsText.html) with `key` set to `'avatar'`.

Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize.html) function for this.

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const ensAvatar = await client.getEnsAvatar({
  name: normalize('wevm.eth'),
})
// 'https://ipfs.io/ipfs/Qma8mnp6xV3J2cRNf3mTth5C8nV11CAnceVinc3y8jSbio'
```

##### getEnsName

> **getEnsName**: (`args`) => `Promise`\<`GetEnsNameReturnType`\>

Gets primary name for specified address.

- Docs: https://viem.sh/docs/ens/actions/getEnsName.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

###### Remarks

Calls `reverse(bytes)` on ENS Universal Resolver Contract to "reverse resolve" the address to the primary ENS name.

###### Param

[GetEnsNameParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const ensName = await client.getEnsName({
  address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
})
// 'wevm.eth'
```

Gets primary name for specified address.

- Docs: https://viem.sh/docs/ens/actions/getEnsName.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

###### Parameters

▪ **args**: `object`

[GetEnsNameParameters]([object Object])

▪ **args.address**: \`0x${string}\`

Address to get ENS name for.

▪ **args.blockNumber?**: `bigint`

The balance of the account at a block number.

▪ **args.blockTag?**: `BlockTag`

The balance of the account at a block tag.

**Default**

```ts
'latest'
```

▪ **args.universalResolverAddress?**: \`0x${string}\`

Address of ENS Universal Resolver Contract.

###### Returns

Name or `null` if not found. [GetEnsNameReturnType]([object Object])

###### Remarks

Calls `reverse(bytes)` on ENS Universal Resolver Contract to "reverse resolve" the address to the primary ENS name.

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const ensName = await client.getEnsName({
  address: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
})
// 'wevm.eth'
```

##### getEnsResolver

> **getEnsResolver**: (`args`) => `Promise`\<\`0x${string}\`\>

Gets resolver for ENS name.

- Docs: https://viem.sh/docs/ens/actions/getEnsResolver.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

###### Remarks

Calls `findResolver(bytes)` on ENS Universal Resolver Contract to retrieve the resolver of an ENS name.

Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize.html) function for this.

###### Param

[GetEnsResolverParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const resolverAddress = await client.getEnsResolver({
  name: normalize('wevm.eth'),
})
// '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41'
```

Gets resolver for ENS name.

- Docs: https://viem.sh/docs/ens/actions/getEnsResolver.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

###### Parameters

▪ **args**: `object`

[GetEnsResolverParameters]([object Object])

▪ **args.blockNumber?**: `bigint`

The balance of the account at a block number.

▪ **args.blockTag?**: `BlockTag`

The balance of the account at a block tag.

**Default**

```ts
'latest'
```

▪ **args.name**: `string`

Name to get the address for.

▪ **args.universalResolverAddress?**: \`0x${string}\`

Address of ENS Universal Resolver Contract.

###### Returns

Address for ENS resolver. [GetEnsResolverReturnType]([object Object])

###### Remarks

Calls `findResolver(bytes)` on ENS Universal Resolver Contract to retrieve the resolver of an ENS name.

Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize.html) function for this.

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const resolverAddress = await client.getEnsResolver({
  name: normalize('wevm.eth'),
})
// '0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41'
```

##### getEnsText

> **getEnsText**: (`args`) => `Promise`\<`GetEnsTextReturnType`\>

Gets a text record for specified ENS name.

- Docs: https://viem.sh/docs/ens/actions/getEnsResolver.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

###### Remarks

Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.

Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize.html) function for this.

###### Param

[GetEnsTextParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const twitterRecord = await client.getEnsText({
  name: normalize('wevm.eth'),
  key: 'com.twitter',
})
// 'wagmi_sh'
```

Gets a text record for specified ENS name.

- Docs: https://viem.sh/docs/ens/actions/getEnsResolver.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/ens

###### Parameters

▪ **args**: `object`

[GetEnsTextParameters]([object Object])

▪ **args.blockNumber?**: `bigint`

The balance of the account at a block number.

▪ **args.blockTag?**: `BlockTag`

The balance of the account at a block tag.

**Default**

```ts
'latest'
```

▪ **args.key**: `string`

Text record to retrieve.

▪ **args.name**: `string`

ENS name to get Text for.

▪ **args.universalResolverAddress?**: \`0x${string}\`

Address of ENS Universal Resolver Contract.

###### Returns

Address for ENS resolver. [GetEnsTextReturnType]([object Object])

###### Remarks

Calls `resolve(bytes, bytes)` on ENS Universal Resolver Contract.

Since ENS names prohibit certain forbidden characters (e.g. underscore) and have other validation rules, you likely want to [normalize ENS names](https://docs.ens.domains/contract-api-reference/name-processing#normalising-names) with [UTS-46 normalization](https://unicode.org/reports/tr46) before passing them to `getEnsAddress`. You can use the built-in [`normalize`](https://viem.sh/docs/ens/utilities/normalize.html) function for this.

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { normalize } from 'viem/ens'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const twitterRecord = await client.getEnsText({
  name: normalize('wevm.eth'),
  key: 'com.twitter',
})
// 'wagmi_sh'
```

##### getFeeHistory

> **getFeeHistory**: (`args`) => `Promise`\<`GetFeeHistoryReturnType`\>

Returns a collection of historical gas information.

- Docs: https://viem.sh/docs/actions/public/getFeeHistory.html
- JSON-RPC Methods: [`eth_feeHistory`](https://docs.alchemy.com/reference/eth-feehistory)

###### Param

[GetFeeHistoryParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const feeHistory = await client.getFeeHistory({
  blockCount: 4,
  rewardPercentiles: [25, 75],
})
```

Returns a collection of historical gas information.

- Docs: https://viem.sh/docs/actions/public/getFeeHistory.html
- JSON-RPC Methods: [`eth_feeHistory`](https://docs.alchemy.com/reference/eth-feehistory)

###### Parameters

▪ **args**: `GetFeeHistoryParameters`

[GetFeeHistoryParameters]([object Object])

###### Returns

The gas estimate (in wei). [GetFeeHistoryReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const feeHistory = await client.getFeeHistory({
  blockCount: 4,
  rewardPercentiles: [25, 75],
})
```

##### getFilterChanges

> **getFilterChanges**: \<`TFilterType`, `TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>(`args`) => `Promise`\<`GetFilterChangesReturnType`\<`TFilterType`, `TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>\>

Returns a list of logs or hashes based on a [Filter](/docs/glossary/terms#filter) since the last time it was called.

- Docs: https://viem.sh/docs/actions/public/getFilterChanges.html
- JSON-RPC Methods: [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges)

###### Remarks

A Filter can be created from the following actions:

- [`createBlockFilter`](https://viem.sh/docs/actions/public/createBlockFilter.html)
- [`createContractEventFilter`](https://viem.sh/docs/contract/createContractEventFilter.html)
- [`createEventFilter`](https://viem.sh/docs/actions/public/createEventFilter.html)
- [`createPendingTransactionFilter`](https://viem.sh/docs/actions/public/createPendingTransactionFilter.html)

Depending on the type of filter, the return value will be different:

- If the filter was created with `createContractEventFilter` or `createEventFilter`, it returns a list of logs.
- If the filter was created with `createPendingTransactionFilter`, it returns a list of transaction hashes.
- If the filter was created with `createBlockFilter`, it returns a list of block hashes.

###### Param

[GetFilterChangesParameters]([object Object])

###### Example

```ts
// Blocks
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createBlockFilter()
const hashes = await client.getFilterChanges({ filter })
```

###### Example

```ts
// Contract Events
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createContractEventFilter({
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
  eventName: 'Transfer',
})
const logs = await client.getFilterChanges({ filter })
```

###### Example

```ts
// Raw Events
import { createPublicClient, http, parseAbiItem } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createEventFilter({
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
})
const logs = await client.getFilterChanges({ filter })
```

###### Example

```ts
// Transactions
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createPendingTransactionFilter()
const hashes = await client.getFilterChanges({ filter })
```

Returns a list of logs or hashes based on a [Filter](/docs/glossary/terms#filter) since the last time it was called.

- Docs: https://viem.sh/docs/actions/public/getFilterChanges.html
- JSON-RPC Methods: [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges)

###### Type parameters

▪ **TFilterType** extends `FilterType`

▪ **TAbi** extends `undefined` \| `Abi` \| readonly `unknown`[]

▪ **TEventName** extends `undefined` \| `string`

▪ **TStrict** extends `undefined` \| `boolean` = `undefined`

▪ **TFromBlock** extends `undefined` \| `bigint` \| `BlockTag` = `undefined`

▪ **TToBlock** extends `undefined` \| `bigint` \| `BlockTag` = `undefined`

###### Parameters

▪ **args**: `GetFilterChangesParameters`\<`TFilterType`, `TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>

[GetFilterChangesParameters]([object Object])

###### Returns

Logs or hashes. [GetFilterChangesReturnType]([object Object])

###### Remarks

A Filter can be created from the following actions:

- [`createBlockFilter`](https://viem.sh/docs/actions/public/createBlockFilter.html)
- [`createContractEventFilter`](https://viem.sh/docs/contract/createContractEventFilter.html)
- [`createEventFilter`](https://viem.sh/docs/actions/public/createEventFilter.html)
- [`createPendingTransactionFilter`](https://viem.sh/docs/actions/public/createPendingTransactionFilter.html)

Depending on the type of filter, the return value will be different:

- If the filter was created with `createContractEventFilter` or `createEventFilter`, it returns a list of logs.
- If the filter was created with `createPendingTransactionFilter`, it returns a list of transaction hashes.
- If the filter was created with `createBlockFilter`, it returns a list of block hashes.

###### Example

```ts
// Blocks
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createBlockFilter()
const hashes = await client.getFilterChanges({ filter })
```

###### Example

```ts
// Contract Events
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createContractEventFilter({
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  abi: parseAbi(['event Transfer(address indexed, address indexed, uint256)']),
  eventName: 'Transfer',
})
const logs = await client.getFilterChanges({ filter })
```

###### Example

```ts
// Raw Events
import { createPublicClient, http, parseAbiItem } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createEventFilter({
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
})
const logs = await client.getFilterChanges({ filter })
```

###### Example

```ts
// Transactions
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createPendingTransactionFilter()
const hashes = await client.getFilterChanges({ filter })
```

##### getFilterLogs

> **getFilterLogs**: \<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>(`args`) => `Promise`\<`GetFilterLogsReturnType`\<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>\>

Returns a list of event logs since the filter was created.

- Docs: https://viem.sh/docs/actions/public/getFilterLogs.html
- JSON-RPC Methods: [`eth_getFilterLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterlogs)

###### Remarks

`getFilterLogs` is only compatible with **event filters**.

###### Param

[GetFilterLogsParameters]([object Object])

###### Example

```ts
import { createPublicClient, http, parseAbiItem } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createEventFilter({
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
})
const logs = await client.getFilterLogs({ filter })
```

Returns a list of event logs since the filter was created.

- Docs: https://viem.sh/docs/actions/public/getFilterLogs.html
- JSON-RPC Methods: [`eth_getFilterLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterlogs)

###### Type parameters

▪ **TAbi** extends `undefined` \| `Abi` \| readonly `unknown`[]

▪ **TEventName** extends `undefined` \| `string`

▪ **TStrict** extends `undefined` \| `boolean` = `undefined`

▪ **TFromBlock** extends `undefined` \| `bigint` \| `BlockTag` = `undefined`

▪ **TToBlock** extends `undefined` \| `bigint` \| `BlockTag` = `undefined`

###### Parameters

▪ **args**: `GetFilterLogsParameters`\<`TAbi`, `TEventName`, `TStrict`, `TFromBlock`, `TToBlock`\>

[GetFilterLogsParameters]([object Object])

###### Returns

A list of event logs. [GetFilterLogsReturnType]([object Object])

###### Remarks

`getFilterLogs` is only compatible with **event filters**.

###### Example

```ts
import { createPublicClient, http, parseAbiItem } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const filter = await client.createEventFilter({
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  event: parseAbiItem('event Transfer(address indexed, address indexed, uint256)'),
})
const logs = await client.getFilterLogs({ filter })
```

##### getGasPrice

> **getGasPrice**: () => `Promise`\<`bigint`\>

Returns the current price of gas (in wei).

- Docs: https://viem.sh/docs/actions/public/getGasPrice.html
- JSON-RPC Methods: [`eth_gasPrice`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gasprice)

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const gasPrice = await client.getGasPrice()
```

Returns the current price of gas (in wei).

- Docs: https://viem.sh/docs/actions/public/getGasPrice.html
- JSON-RPC Methods: [`eth_gasPrice`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gasprice)

###### Returns

The gas price (in wei). [GetGasPriceReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const gasPrice = await client.getGasPrice()
```

##### getLogs

> **getLogs**: \<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`\>(`args`?) => `Promise`\<`GetLogsReturnType`\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`\>\>

Returns a list of event logs matching the provided parameters.

- Docs: https://viem.sh/docs/actions/public/getLogs.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/filters-and-logs/event-logs
- JSON-RPC Methods: [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)

###### Param

[GetLogsParameters]([object Object])

###### Example

```ts
import { createPublicClient, http, parseAbiItem } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const logs = await client.getLogs()
```

Returns a list of event logs matching the provided parameters.

- Docs: https://viem.sh/docs/actions/public/getLogs.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/filters-and-logs/event-logs
- JSON-RPC Methods: [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs)

###### Type parameters

▪ **TAbiEvent** extends `undefined` \| `AbiEvent` = `undefined`

▪ **TAbiEvents** extends `undefined` \| readonly `unknown`[] \| readonly `AbiEvent`[] = `TAbiEvent` extends `AbiEvent` ? [`TAbiEvent`] : `undefined`

▪ **TStrict** extends `undefined` \| `boolean` = `undefined`

▪ **TFromBlock** extends `undefined` \| `bigint` \| `BlockTag` = `undefined`

▪ **TToBlock** extends `undefined` \| `bigint` \| `BlockTag` = `undefined`

###### Parameters

▪ **args?**: `GetLogsParameters`\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `TFromBlock`, `TToBlock`\>

[GetLogsParameters]([object Object])

###### Returns

A list of event logs. [GetLogsReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http, parseAbiItem } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const logs = await client.getLogs()
```

##### getProof

> **getProof**: (`args`) => `Promise`\<`GetProofReturnType`\>

Returns the account and storage values of the specified account including the Merkle-proof.

- Docs: https://viem.sh/docs/actions/public/getProof.html
- JSON-RPC Methods:
  - Calls [`eth_getProof`](https://eips.ethereum.org/EIPS/eip-1186)

###### Param

Client to use

###### Param

[GetProofParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const block = await client.getProof({
 address: '0x...',
 storageKeys: ['0x...'],
})
```

Returns the account and storage values of the specified account including the Merkle-proof.

- Docs: https://viem.sh/docs/actions/public/getProof.html
- JSON-RPC Methods:
  - Calls [`eth_getProof`](https://eips.ethereum.org/EIPS/eip-1186)

###### Parameters

▪ **args**: `GetProofParameters`

###### Returns

Proof data. [GetProofReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const block = await client.getProof({
 address: '0x...',
 storageKeys: ['0x...'],
})
```

##### getStorageAt

> **getStorageAt**: (`args`) => `Promise`\<`GetStorageAtReturnType`\>

Returns the value from a storage slot at a given address.

- Docs: https://viem.sh/docs/contract/getStorageAt.html
- JSON-RPC Methods: [`eth_getStorageAt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getstorageat)

###### Param

[GetStorageAtParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { getStorageAt } from 'viem/contract'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const code = await client.getStorageAt({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  slot: toHex(0),
})
```

Returns the value from a storage slot at a given address.

- Docs: https://viem.sh/docs/contract/getStorageAt.html
- JSON-RPC Methods: [`eth_getStorageAt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getstorageat)

###### Parameters

▪ **args**: `GetStorageAtParameters`

[GetStorageAtParameters]([object Object])

###### Returns

The value of the storage slot. [GetStorageAtReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { getStorageAt } from 'viem/contract'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const code = await client.getStorageAt({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  slot: toHex(0),
})
```

##### getTransaction

> **getTransaction**: \<`TBlockTag`\>(`args`) => `Promise`\<`GetTransactionReturnType`\<`undefined` \| `Chain`, `TBlockTag`\>\>

Returns information about a [Transaction](https://viem.sh/docs/glossary/terms.html#transaction) given a hash or block identifier.

- Docs: https://viem.sh/docs/actions/public/getTransaction.html
- Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/fetching-transactions
- JSON-RPC Methods: [`eth_getTransactionByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionByHash)

###### Param

[GetTransactionParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const transaction = await client.getTransaction({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

Returns information about a [Transaction](https://viem.sh/docs/glossary/terms.html#transaction) given a hash or block identifier.

- Docs: https://viem.sh/docs/actions/public/getTransaction.html
- Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/fetching-transactions
- JSON-RPC Methods: [`eth_getTransactionByHash`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionByHash)

###### Type parameters

▪ **TBlockTag** extends `BlockTag` = `"latest"`

###### Parameters

▪ **args**: `GetTransactionParameters`\<`TBlockTag`\>

[GetTransactionParameters]([object Object])

###### Returns

The transaction information. [GetTransactionReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const transaction = await client.getTransaction({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

##### getTransactionConfirmations

> **getTransactionConfirmations**: (`args`) => `Promise`\<`bigint`\>

Returns the number of blocks passed (confirmations) since the transaction was processed on a block.

- Docs: https://viem.sh/docs/actions/public/getTransactionConfirmations.html
- Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/fetching-transactions
- JSON-RPC Methods: [`eth_getTransactionConfirmations`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionConfirmations)

###### Param

[GetTransactionConfirmationsParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const confirmations = await client.getTransactionConfirmations({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

Returns the number of blocks passed (confirmations) since the transaction was processed on a block.

- Docs: https://viem.sh/docs/actions/public/getTransactionConfirmations.html
- Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/fetching-transactions
- JSON-RPC Methods: [`eth_getTransactionConfirmations`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionConfirmations)

###### Parameters

▪ **args**: `GetTransactionConfirmationsParameters`\<`undefined` \| `Chain`\>

[GetTransactionConfirmationsParameters]([object Object])

###### Returns

The number of blocks passed since the transaction was processed. If confirmations is 0, then the Transaction has not been confirmed & processed yet. [GetTransactionConfirmationsReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const confirmations = await client.getTransactionConfirmations({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

##### getTransactionCount

> **getTransactionCount**: (`args`) => `Promise`\<`number`\>

Returns the number of [Transactions](https://viem.sh/docs/glossary/terms.html#transaction) an Account has broadcast / sent.

- Docs: https://viem.sh/docs/actions/public/getTransactionCount.html
- JSON-RPC Methods: [`eth_getTransactionCount`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactioncount)

###### Param

[GetTransactionCountParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const transactionCount = await client.getTransactionCount({
  address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
```

Returns the number of [Transactions](https://viem.sh/docs/glossary/terms.html#transaction) an Account has broadcast / sent.

- Docs: https://viem.sh/docs/actions/public/getTransactionCount.html
- JSON-RPC Methods: [`eth_getTransactionCount`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_gettransactioncount)

###### Parameters

▪ **args**: `GetTransactionCountParameters`

[GetTransactionCountParameters]([object Object])

###### Returns

The number of transactions an account has sent. [GetTransactionCountReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const transactionCount = await client.getTransactionCount({
  address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
```

##### getTransactionReceipt

> **getTransactionReceipt**: (`args`) => `Promise`\<`TransactionReceipt`\>

Returns the [Transaction Receipt](https://viem.sh/docs/glossary/terms.html#transaction-receipt) given a [Transaction](https://viem.sh/docs/glossary/terms.html#transaction) hash.

- Docs: https://viem.sh/docs/actions/public/getTransactionReceipt.html
- Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/fetching-transactions
- JSON-RPC Methods: [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt)

###### Param

[GetTransactionReceiptParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const transactionReceipt = await client.getTransactionReceipt({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

Returns the [Transaction Receipt](https://viem.sh/docs/glossary/terms.html#transaction-receipt) given a [Transaction](https://viem.sh/docs/glossary/terms.html#transaction) hash.

- Docs: https://viem.sh/docs/actions/public/getTransactionReceipt.html
- Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/fetching-transactions
- JSON-RPC Methods: [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt)

###### Parameters

▪ **args**: `GetTransactionReceiptParameters`

[GetTransactionReceiptParameters]([object Object])

###### Returns

The transaction receipt. [GetTransactionReceiptReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const transactionReceipt = await client.getTransactionReceipt({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

##### key

> **key**: `string`

A key for the client.

##### multicall

> **multicall**: \<`contracts`, `allowFailure`\>(`args`) => `Promise`\<`MulticallReturnType`\<`contracts`, `allowFailure`\>\>

Similar to [`readContract`](https://viem.sh/docs/contract/readContract.html), but batches up multiple functions on a contract in a single RPC call via the [`multicall3` contract](https://github.com/mds1/multicall).

- Docs: https://viem.sh/docs/contract/multicall.html

###### Param

[MulticallParameters]([object Object])

###### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const abi = parseAbi([
  'function balanceOf(address) view returns (uint256)',
  'function totalSupply() view returns (uint256)',
])
const result = await client.multicall({
  contracts: [
    {
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'balanceOf',
      args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
    },
    {
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'totalSupply',
    },
  ],
})
// [{ result: 424122n, status: 'success' }, { result: 1000000n, status: 'success' }]
```

Similar to [`readContract`](https://viem.sh/docs/contract/readContract.html), but batches up multiple functions on a contract in a single RPC call via the [`multicall3` contract](https://github.com/mds1/multicall).

- Docs: https://viem.sh/docs/contract/multicall.html

###### Type parameters

▪ **contracts** extends readonly `unknown`[]

▪ **allowFailure** extends `boolean` = `true`

###### Parameters

▪ **args**: `MulticallParameters`\<`contracts`, `allowFailure`\>

[MulticallParameters]([object Object])

###### Returns

An array of results with accompanying status. [MulticallReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const abi = parseAbi([
  'function balanceOf(address) view returns (uint256)',
  'function totalSupply() view returns (uint256)',
])
const result = await client.multicall({
  contracts: [
    {
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'balanceOf',
      args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
    },
    {
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'totalSupply',
    },
  ],
})
// [{ result: 424122n, status: 'success' }, { result: 1000000n, status: 'success' }]
```

##### name

> **name**: `string`

A name for the client.

##### pollingInterval

> **pollingInterval**: `number`

Frequency (in ms) for polling enabled actions & events. Defaults to 4_000 milliseconds.

##### prepareTransactionRequest

> **prepareTransactionRequest**: \<`TParameterType`, `TChainOverride`, `TAccountOverride`\>(`args`) => `Promise`\<`PrepareTransactionRequestReturnType`\<`Chain`, `undefined` \| `Account`, `TChainOverride`, `TAccountOverride`, `TParameterType`\>\>

Prepares a transaction request for signing.

- Docs: https://viem.sh/docs/actions/wallet/prepareTransactionRequest.html

###### Param

[PrepareTransactionRequestParameters]([object Object])

###### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const request = await client.prepareTransactionRequest({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  to: '0x0000000000000000000000000000000000000000',
  value: 1n,
})
```

###### Example

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: custom(window.ethereum),
})
const request = await client.prepareTransactionRequest({
  to: '0x0000000000000000000000000000000000000000',
  value: 1n,
})
```

Prepares a transaction request for signing.

- Docs: https://viem.sh/docs/actions/wallet/prepareTransactionRequest.html

###### Type parameters

▪ **TParameterType** extends `PrepareTransactionRequestParameterType`

▪ **TChainOverride** extends `undefined` \| `Chain` = `undefined`

▪ **TAccountOverride** extends `undefined` \| \`0x${string}\` \| `Account` = `undefined`

###### Parameters

▪ **args**: `PrepareTransactionRequestParameters`\<`undefined` \| `Chain`, `undefined` \| `Account`, `TChainOverride`, `TAccountOverride`, `TParameterType`\>

[PrepareTransactionRequestParameters]([object Object])

###### Returns

The transaction request. [PrepareTransactionRequestReturnType]([object Object])

###### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const request = await client.prepareTransactionRequest({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  to: '0x0000000000000000000000000000000000000000',
  value: 1n,
})
```

###### Example

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: custom(window.ethereum),
})
const request = await client.prepareTransactionRequest({
  to: '0x0000000000000000000000000000000000000000',
  value: 1n,
})
```

##### readContract

> **readContract**: \<`abi`, `functionName`, `args`\>(`args`) => `Promise`\<`ReadContractReturnType`\<`abi`, `functionName`, `args`\>\>

Calls a read-only function on a contract, and returns the response.

- Docs: https://viem.sh/docs/contract/readContract.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts/reading-contracts

###### Remarks

A "read-only" function (constant function) on a Solidity contract is denoted by a `view` or `pure` keyword. They can only read the state of the contract, and cannot make any changes to it. Since read-only methods do not change the state of the contract, they do not require any gas to be executed, and can be called by any user without the need to pay for gas.

Internally, uses a [Public Client](https://viem.sh/docs/clients/public.html) to call the [`call` action](https://viem.sh/docs/actions/public/call.html) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData.html).

###### Param

[ReadContractParameters]([object Object])

###### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'
import { readContract } from 'viem/contract'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const result = await client.readContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function balanceOf(address) view returns (uint256)']),
  functionName: 'balanceOf',
  args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
})
// 424122n
```

Calls a read-only function on a contract, and returns the response.

- Docs: https://viem.sh/docs/contract/readContract.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts/reading-contracts

###### Type parameters

▪ **abi** extends `Abi` \| readonly `unknown`[]

▪ **functionName** extends `string`

▪ **args** extends `unknown`

###### Parameters

▪ **args**: `ReadContractParameters`\<`abi`, `functionName`, `args`\>

[ReadContractParameters]([object Object])

###### Returns

The response from the contract. Type is inferred. [ReadContractReturnType]([object Object])

###### Remarks

A "read-only" function (constant function) on a Solidity contract is denoted by a `view` or `pure` keyword. They can only read the state of the contract, and cannot make any changes to it. Since read-only methods do not change the state of the contract, they do not require any gas to be executed, and can be called by any user without the need to pay for gas.

Internally, uses a [Public Client](https://viem.sh/docs/clients/public.html) to call the [`call` action](https://viem.sh/docs/actions/public/call.html) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData.html).

###### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'
import { readContract } from 'viem/contract'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const result = await client.readContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function balanceOf(address) view returns (uint256)']),
  functionName: 'balanceOf',
  args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
})
// 424122n
```

##### request

> **request**: `EIP1193RequestFn`\<`PublicRpcSchema`\>

Request function wrapped with friendly error handling

##### sendRawTransaction

> **sendRawTransaction**: (`args`) => `Promise`\<\`0x${string}\`\>

Sends a **signed** transaction to the network

- Docs: https://viem.sh/docs/actions/wallet/sendRawTransaction.html
- JSON-RPC Method: [`eth_sendRawTransaction`](https://ethereum.github.io/execution-apis/api-documentation/)

###### Param

Client to use

###### Param

[SendRawTransactionParameters]([object Object])

###### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'
import { sendRawTransaction } from 'viem/wallet'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})

const hash = await client.sendRawTransaction({
  serializedTransaction: '0x02f850018203118080825208808080c080a04012522854168b27e5dc3d5839bab5e6b39e1a0ffd343901ce1622e3d64b48f1a04e00902ae0502c4728cbf12156290df99c3ed7de85b1dbfe20b5c36931733a33'
})
```

Sends a **signed** transaction to the network

- Docs: https://viem.sh/docs/actions/wallet/sendRawTransaction.html
- JSON-RPC Method: [`eth_sendRawTransaction`](https://ethereum.github.io/execution-apis/api-documentation/)

###### Parameters

▪ **args**: `SendRawTransactionParameters`

###### Returns

The transaction hash. [SendRawTransactionReturnType]([object Object])

###### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'
import { sendRawTransaction } from 'viem/wallet'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})

const hash = await client.sendRawTransaction({
  serializedTransaction: '0x02f850018203118080825208808080c080a04012522854168b27e5dc3d5839bab5e6b39e1a0ffd343901ce1622e3d64b48f1a04e00902ae0502c4728cbf12156290df99c3ed7de85b1dbfe20b5c36931733a33'
})
```

##### simulateContract

> **simulateContract**: \<`abi`, `functionName`, `args`, `chainOverride`, `accountOverride`\>(`args`) => `Promise`\<`SimulateContractReturnType`\<`abi`, `functionName`, `args`, `undefined` \| `Chain`, `undefined` \| `Account`, `chainOverride`, `accountOverride`\>\>

Simulates/validates a contract interaction. This is useful for retrieving **return data** and **revert reasons** of contract write functions.

- Docs: https://viem.sh/docs/contract/simulateContract.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts/writing-to-contracts

###### Remarks

This function does not require gas to execute and _**does not**_ change the state of the blockchain. It is almost identical to [`readContract`](https://viem.sh/docs/contract/readContract.html), but also supports contract write functions.

Internally, uses a [Public Client](https://viem.sh/docs/clients/public.html) to call the [`call` action](https://viem.sh/docs/actions/public/call.html) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData.html).

###### Param

[SimulateContractParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const result = await client.simulateContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint(uint32) view returns (uint32)']),
  functionName: 'mint',
  args: ['69420'],
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
```

Simulates/validates a contract interaction. This is useful for retrieving **return data** and **revert reasons** of contract write functions.

- Docs: https://viem.sh/docs/contract/simulateContract.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts/writing-to-contracts

###### Type parameters

▪ **abi** extends `Abi` \| readonly `unknown`[]

▪ **functionName** extends `string`

▪ **args** extends `unknown`

▪ **chainOverride** extends `undefined` \| `Chain`

▪ **accountOverride** extends `undefined` \| \`0x${string}\` \| `Account` = `undefined`

###### Parameters

▪ **args**: `SimulateContractParameters`\<`abi`, `functionName`, `args`, `undefined` \| `Chain`, `chainOverride`, `accountOverride`\>

[SimulateContractParameters]([object Object])

###### Returns

The simulation result and write request. [SimulateContractReturnType]([object Object])

###### Remarks

This function does not require gas to execute and _**does not**_ change the state of the blockchain. It is almost identical to [`readContract`](https://viem.sh/docs/contract/readContract.html), but also supports contract write functions.

Internally, uses a [Public Client](https://viem.sh/docs/clients/public.html) to call the [`call` action](https://viem.sh/docs/actions/public/call.html) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData.html).

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const result = await client.simulateContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint(uint32) view returns (uint32)']),
  functionName: 'mint',
  args: ['69420'],
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
```

##### transport

> **transport**: `TransportConfig`\<`string`, `EIP1193RequestFn`\> & `Record`\<`string`, `any`\>

The RPC transport

##### type

> **type**: `string`

The type of client.

##### uid

> **uid**: `string`

A unique ID for the client.

##### uninstallFilter

> **uninstallFilter**: (`args`) => `Promise`\<`boolean`\>

Destroys a Filter that was created from one of the following Actions:

- [`createBlockFilter`](https://viem.sh/docs/actions/public/createBlockFilter.html)
- [`createEventFilter`](https://viem.sh/docs/actions/public/createEventFilter.html)
- [`createPendingTransactionFilter`](https://viem.sh/docs/actions/public/createPendingTransactionFilter.html)

- Docs: https://viem.sh/docs/actions/public/uninstallFilter.html
- JSON-RPC Methods: [`eth_uninstallFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_uninstallFilter)

###### Param

[UninstallFilterParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { createPendingTransactionFilter, uninstallFilter } from 'viem/public'

const filter = await client.createPendingTransactionFilter()
const uninstalled = await client.uninstallFilter({ filter })
// true
```

Destroys a Filter that was created from one of the following Actions:

- [`createBlockFilter`](https://viem.sh/docs/actions/public/createBlockFilter.html)
- [`createEventFilter`](https://viem.sh/docs/actions/public/createEventFilter.html)
- [`createPendingTransactionFilter`](https://viem.sh/docs/actions/public/createPendingTransactionFilter.html)

- Docs: https://viem.sh/docs/actions/public/uninstallFilter.html
- JSON-RPC Methods: [`eth_uninstallFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_uninstallFilter)

###### Parameters

▪ **args**: `UninstallFilterParameters`

[UninstallFilterParameters]([object Object])

###### Returns

A boolean indicating if the Filter was successfully uninstalled. [UninstallFilterReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { createPendingTransactionFilter, uninstallFilter } from 'viem/public'

const filter = await client.createPendingTransactionFilter()
const uninstalled = await client.uninstallFilter({ filter })
// true
```

##### verifyMessage

> **verifyMessage**: (`args`) => `Promise`\<`boolean`\>

###### Parameters

▪ **args**: `VerifyMessageParameters`

##### verifyTypedData

> **verifyTypedData**: (`args`) => `Promise`\<`boolean`\>

###### Parameters

▪ **args**: `VerifyTypedDataParameters`

##### waitForTransactionReceipt

> **waitForTransactionReceipt**: (`args`) => `Promise`\<`TransactionReceipt`\>

Waits for the [Transaction](https://viem.sh/docs/glossary/terms.html#transaction) to be included on a [Block](https://viem.sh/docs/glossary/terms.html#block) (one confirmation), and then returns the [Transaction Receipt](https://viem.sh/docs/glossary/terms.html#transaction-receipt). If the Transaction reverts, then the action will throw an error.

- Docs: https://viem.sh/docs/actions/public/waitForTransactionReceipt.html
- Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/sending-transactions
- JSON-RPC Methods:
  - Polls [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt) on each block until it has been processed.
  - If a Transaction has been replaced:
    - Calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber) and extracts the transactions
    - Checks if one of the Transactions is a replacement
    - If so, calls [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt).

###### Remarks

The `waitForTransactionReceipt` action additionally supports Replacement detection (e.g. sped up Transactions).

Transactions can be replaced when a user modifies their transaction in their wallet (to speed up or cancel). Transactions are replaced when they are sent from the same nonce.

There are 3 types of Transaction Replacement reasons:

- `repriced`: The gas price has been modified (e.g. different `maxFeePerGas`)
- `cancelled`: The Transaction has been cancelled (e.g. `value === 0n`)
- `replaced`: The Transaction has been replaced (e.g. different `value` or `data`)

###### Param

[WaitForTransactionReceiptParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const transactionReceipt = await client.waitForTransactionReceipt({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

Waits for the [Transaction](https://viem.sh/docs/glossary/terms.html#transaction) to be included on a [Block](https://viem.sh/docs/glossary/terms.html#block) (one confirmation), and then returns the [Transaction Receipt](https://viem.sh/docs/glossary/terms.html#transaction-receipt). If the Transaction reverts, then the action will throw an error.

- Docs: https://viem.sh/docs/actions/public/waitForTransactionReceipt.html
- Example: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions/sending-transactions
- JSON-RPC Methods:
  - Polls [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt) on each block until it has been processed.
  - If a Transaction has been replaced:
    - Calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getblockbynumber) and extracts the transactions
    - Checks if one of the Transactions is a replacement
    - If so, calls [`eth_getTransactionReceipt`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getTransactionReceipt).

###### Parameters

▪ **args**: `WaitForTransactionReceiptParameters`\<`undefined` \| `Chain`\>

[WaitForTransactionReceiptParameters]([object Object])

###### Returns

The transaction receipt. [WaitForTransactionReceiptReturnType]([object Object])

###### Remarks

The `waitForTransactionReceipt` action additionally supports Replacement detection (e.g. sped up Transactions).

Transactions can be replaced when a user modifies their transaction in their wallet (to speed up or cancel). Transactions are replaced when they are sent from the same nonce.

There are 3 types of Transaction Replacement reasons:

- `repriced`: The gas price has been modified (e.g. different `maxFeePerGas`)
- `cancelled`: The Transaction has been cancelled (e.g. `value === 0n`)
- `replaced`: The Transaction has been replaced (e.g. different `value` or `data`)

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const transactionReceipt = await client.waitForTransactionReceipt({
  hash: '0x4ca7ee652d57678f26e887c149ab0735f41de37bcad58c9f6d3ed5824f15b74d',
})
```

##### watchBlockNumber

> **watchBlockNumber**: (`args`) => `WatchBlockNumberReturnType`

Watches and returns incoming block numbers.

- Docs: https://viem.sh/docs/actions/public/watchBlockNumber.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks/watching-blocks
- JSON-RPC Methods:
  - When `poll: true`, calls [`eth_blockNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber) on a polling interval.
  - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newHeads"` event.

###### Param

[WatchBlockNumberParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = await client.watchBlockNumber({
  onBlockNumber: (blockNumber) => console.log(blockNumber),
})
```

Watches and returns incoming block numbers.

- Docs: https://viem.sh/docs/actions/public/watchBlockNumber.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks/watching-blocks
- JSON-RPC Methods:
  - When `poll: true`, calls [`eth_blockNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_blocknumber) on a polling interval.
  - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newHeads"` event.

###### Parameters

▪ **args**: `WatchBlockNumberParameters`

[WatchBlockNumberParameters]([object Object])

###### Returns

A function that can be invoked to stop watching for new block numbers. [WatchBlockNumberReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = await client.watchBlockNumber({
  onBlockNumber: (blockNumber) => console.log(blockNumber),
})
```

##### watchBlocks

> **watchBlocks**: \<`TIncludeTransactions`, `TBlockTag`\>(`args`) => `WatchBlocksReturnType`

Watches and returns information for incoming blocks.

- Docs: https://viem.sh/docs/actions/public/watchBlocks.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks/watching-blocks
- JSON-RPC Methods:
  - When `poll: true`, calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getBlockByNumber) on a polling interval.
  - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newHeads"` event.

###### Param

[WatchBlocksParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = await client.watchBlocks({
  onBlock: (block) => console.log(block),
})
```

Watches and returns information for incoming blocks.

- Docs: https://viem.sh/docs/actions/public/watchBlocks.html
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/blocks/watching-blocks
- JSON-RPC Methods:
  - When `poll: true`, calls [`eth_getBlockByNumber`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getBlockByNumber) on a polling interval.
  - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newHeads"` event.

###### Type parameters

▪ **TIncludeTransactions** extends `boolean` = `false`

▪ **TBlockTag** extends `BlockTag` = `"latest"`

###### Parameters

▪ **args**: `WatchBlocksParameters`\<`Transport`, `undefined` \| `Chain`, `TIncludeTransactions`, `TBlockTag`\>

[WatchBlocksParameters]([object Object])

###### Returns

A function that can be invoked to stop watching for new block numbers. [WatchBlocksReturnType]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = await client.watchBlocks({
  onBlock: (block) => console.log(block),
})
```

##### watchContractEvent

> **watchContractEvent**: \<`TAbi`, `TEventName`, `TStrict`\>(`args`) => `WatchContractEventReturnType`

Watches and returns emitted contract event logs.

- Docs: https://viem.sh/docs/contract/watchContractEvent.html

###### Remarks

This Action will batch up all the event logs found within the [`pollingInterval`](https://viem.sh/docs/contract/watchContractEvent.html#pollinginterval-optional), and invoke them via [`onLogs`](https://viem.sh/docs/contract/watchContractEvent.html#onLogs).

`watchContractEvent` will attempt to create an [Event Filter](https://viem.sh/docs/contract/createContractEventFilter.html) and listen to changes to the Filter per polling interval, however, if the RPC Provider does not support Filters (e.g. `eth_newFilter`), then `watchContractEvent` will fall back to using [`getLogs`](https://viem.sh/docs/actions/public/getLogs.html) instead.

###### Param

[WatchContractEventParameters]([object Object])

###### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = client.watchContractEvent({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['event Transfer(address indexed from, address indexed to, uint256 value)']),
  eventName: 'Transfer',
  args: { from: '0xc961145a54C96E3aE9bAA048c4F4D6b04C13916b' },
  onLogs: (logs) => console.log(logs),
})
```

Watches and returns emitted contract event logs.

- Docs: https://viem.sh/docs/contract/watchContractEvent.html

###### Type parameters

▪ **TAbi** extends `Abi` \| readonly `unknown`[]

▪ **TEventName** extends `string`

▪ **TStrict** extends `undefined` \| `boolean` = `undefined`

###### Parameters

▪ **args**: `WatchContractEventParameters`\<`TAbi`, `TEventName`, `TStrict`, `Transport`\>

[WatchContractEventParameters]([object Object])

###### Returns

A function that can be invoked to stop watching for new event logs. [WatchContractEventReturnType]([object Object])

###### Remarks

This Action will batch up all the event logs found within the [`pollingInterval`](https://viem.sh/docs/contract/watchContractEvent.html#pollinginterval-optional), and invoke them via [`onLogs`](https://viem.sh/docs/contract/watchContractEvent.html#onLogs).

`watchContractEvent` will attempt to create an [Event Filter](https://viem.sh/docs/contract/createContractEventFilter.html) and listen to changes to the Filter per polling interval, however, if the RPC Provider does not support Filters (e.g. `eth_newFilter`), then `watchContractEvent` will fall back to using [`getLogs`](https://viem.sh/docs/actions/public/getLogs.html) instead.

###### Example

```ts
import { createPublicClient, http, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = client.watchContractEvent({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['event Transfer(address indexed from, address indexed to, uint256 value)']),
  eventName: 'Transfer',
  args: { from: '0xc961145a54C96E3aE9bAA048c4F4D6b04C13916b' },
  onLogs: (logs) => console.log(logs),
})
```

##### watchEvent

> **watchEvent**: \<`TAbiEvent`, `TAbiEvents`, `TStrict`\>(`args`) => `WatchEventReturnType`

Watches and returns emitted [Event Logs](https://viem.sh/docs/glossary/terms.html#event-log).

- Docs: https://viem.sh/docs/actions/public/watchEvent.html
- JSON-RPC Methods:
  - **RPC Provider supports `eth_newFilter`:**
    - Calls [`eth_newFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter) to create a filter (called on initialize).
    - On a polling interval, it will call [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges).
  - **RPC Provider does not support `eth_newFilter`:**
    - Calls [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs) for each block between the polling interval.

###### Remarks

This Action will batch up all the Event Logs found within the [`pollingInterval`](https://viem.sh/docs/actions/public/watchEvent.html#pollinginterval-optional), and invoke them via [`onLogs`](https://viem.sh/docs/actions/public/watchEvent.html#onLogs).

`watchEvent` will attempt to create an [Event Filter](https://viem.sh/docs/actions/public/createEventFilter.html) and listen to changes to the Filter per polling interval, however, if the RPC Provider does not support Filters (e.g. `eth_newFilter`), then `watchEvent` will fall back to using [`getLogs`](https://viem.sh/docs/actions/public/getLogs.html) instead.

###### Param

[WatchEventParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = client.watchEvent({
  onLogs: (logs) => console.log(logs),
})
```

Watches and returns emitted [Event Logs](https://viem.sh/docs/glossary/terms.html#event-log).

- Docs: https://viem.sh/docs/actions/public/watchEvent.html
- JSON-RPC Methods:
  - **RPC Provider supports `eth_newFilter`:**
    - Calls [`eth_newFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newfilter) to create a filter (called on initialize).
    - On a polling interval, it will call [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getfilterchanges).
  - **RPC Provider does not support `eth_newFilter`:**
    - Calls [`eth_getLogs`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getlogs) for each block between the polling interval.

###### Type parameters

▪ **TAbiEvent** extends `undefined` \| `AbiEvent` = `undefined`

▪ **TAbiEvents** extends `undefined` \| readonly `unknown`[] \| readonly `AbiEvent`[] = `TAbiEvent` extends `AbiEvent` ? [`TAbiEvent`] : `undefined`

▪ **TStrict** extends `undefined` \| `boolean` = `undefined`

###### Parameters

▪ **args**: `WatchEventParameters`\<`TAbiEvent`, `TAbiEvents`, `TStrict`, `Transport`\>

[WatchEventParameters]([object Object])

###### Returns

A function that can be invoked to stop watching for new Event Logs. [WatchEventReturnType]([object Object])

###### Remarks

This Action will batch up all the Event Logs found within the [`pollingInterval`](https://viem.sh/docs/actions/public/watchEvent.html#pollinginterval-optional), and invoke them via [`onLogs`](https://viem.sh/docs/actions/public/watchEvent.html#onLogs).

`watchEvent` will attempt to create an [Event Filter](https://viem.sh/docs/actions/public/createEventFilter.html) and listen to changes to the Filter per polling interval, however, if the RPC Provider does not support Filters (e.g. `eth_newFilter`), then `watchEvent` will fall back to using [`getLogs`](https://viem.sh/docs/actions/public/getLogs.html) instead.

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = client.watchEvent({
  onLogs: (logs) => console.log(logs),
})
```

##### watchPendingTransactions

> **watchPendingTransactions**: (`args`) => `WatchPendingTransactionsReturnType`

Watches and returns pending transaction hashes.

- Docs: https://viem.sh/docs/actions/public/watchPendingTransactions.html
- JSON-RPC Methods:
  - When `poll: true`
    - Calls [`eth_newPendingTransactionFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter) to initialize the filter.
    - Calls [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getFilterChanges) on a polling interval.
  - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newPendingTransactions"` event.

###### Remarks

This Action will batch up all the pending transactions found within the [`pollingInterval`](https://viem.sh/docs/actions/public/watchPendingTransactions.html#pollinginterval-optional), and invoke them via [`onTransactions`](https://viem.sh/docs/actions/public/watchPendingTransactions.html#ontransactions).

###### Param

[WatchPendingTransactionsParameters]([object Object])

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = await client.watchPendingTransactions({
  onTransactions: (hashes) => console.log(hashes),
})
```

Watches and returns pending transaction hashes.

- Docs: https://viem.sh/docs/actions/public/watchPendingTransactions.html
- JSON-RPC Methods:
  - When `poll: true`
    - Calls [`eth_newPendingTransactionFilter`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_newpendingtransactionfilter) to initialize the filter.
    - Calls [`eth_getFilterChanges`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_getFilterChanges) on a polling interval.
  - When `poll: false` & WebSocket Transport, uses a WebSocket subscription via [`eth_subscribe`](https://docs.alchemy.com/reference/eth-subscribe-polygon) and the `"newPendingTransactions"` event.

###### Parameters

▪ **args**: `WatchPendingTransactionsParameters`\<`Transport`\>

[WatchPendingTransactionsParameters]([object Object])

###### Returns

A function that can be invoked to stop watching for new pending transaction hashes. [WatchPendingTransactionsReturnType]([object Object])

###### Remarks

This Action will batch up all the pending transactions found within the [`pollingInterval`](https://viem.sh/docs/actions/public/watchPendingTransactions.html#pollinginterval-optional), and invoke them via [`onTransactions`](https://viem.sh/docs/actions/public/watchPendingTransactions.html#ontransactions).

###### Example

```ts
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})
const unwatch = await client.watchPendingTransactions({
  onTransactions: (hashes) => console.log(hashes),
})
```

#### Source

[vm/state/src/TevmStateManager.ts:62](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L62)

***

### opts

> **`readonly`** **opts**: [`TevmStateManagerOpts`](/generated/tevm/state/interfaces/tevmstatemanageropts/)

#### Source

[vm/state/src/TevmStateManager.ts:63](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L63)

***

### originalStorageCache

> **originalStorageCache**: `Cache`

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`originalStorageCache`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#originalstoragecache)

#### Source

[vm/state/src/TevmStateManager.ts:59](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L59)

## Methods

### accountExists()

> **accountExists**(`address`): `Promise`\<`boolean`\>

Checks if an `account` exists at `address`

#### Parameters

▪ **address**: `Address`

Address of the `account` to check

#### Source

[vm/state/src/TevmStateManager.ts:253](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L253)

***

### checkpoint()

> **checkpoint**(): `Promise`\<`void`\>

Checkpoints the current state of the StateManager instance.
State changes that follow can then be committed by calling
`commit` or `reverted` by calling rollback.

Partial implementation, called from the subclass.

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`checkpoint`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#checkpoint)

#### Source

[vm/state/src/TevmStateManager.ts:423](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L423)

***

### clearCaches()

> **clearCaches**(): `void`

Resets all internal caches

#### Source

[vm/state/src/TevmStateManager.ts:125](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L125)

***

### clearContractStorage()

> **clearContractStorage**(`address`): `Promise`\<`void`\>

Clears all storage entries for the account corresponding to `address`.

#### Parameters

▪ **address**: `Address`

Address to clear the storage of

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`clearContractStorage`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#clearcontractstorage)

#### Source

[vm/state/src/TevmStateManager.ts:219](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L219)

***

### commit()

> **commit**(): `Promise`\<`void`\>

Commits the current change-set to the instance since the
last call to checkpoint.

Partial implementation, called from the subclass.

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`commit`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#commit)

#### Source

[vm/state/src/TevmStateManager.ts:434](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L434)

***

### deleteAccount()

> **deleteAccount**(`address`): `Promise`\<`void`\>

Deletes an account from state under the provided `address`.

#### Parameters

▪ **address**: `Address`

Address of the account which should be deleted

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`deleteAccount`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#deleteaccount)

#### Source

[vm/state/src/TevmStateManager.ts:377](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L377)

***

### dumpStorage()

> **dumpStorage**(`address`): `Promise`\<`StorageDump`\>

Dumps the RLP-encoded storage values for an `account` specified by `address`.

#### Parameters

▪ **address**: `Address`

The address of the `account` to return storage for

#### Returns

- The state of the account as an `Object` map.
Keys are the storage keys, values are the storage values as strings.
Both are represented as `0x` prefixed hex strings.

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`dumpStorage`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#dumpstorage)

#### Source

[vm/state/src/TevmStateManager.ts:230](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L230)

***

### dumpStorageRange()

> **dumpStorageRange**(`_address`, `_startKey`, `_limit`): `Promise`\<`StorageRange`\>

#### Parameters

▪ **\_address**: `Address`

▪ **\_startKey**: `bigint`

▪ **\_limit**: `number`

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`dumpStorageRange`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#dumpstoragerange)

#### Source

[vm/state/src/TevmStateManager.ts:241](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L241)

***

### flush()

> **flush**(): `Promise`\<`void`\>

#### Source

[vm/state/src/TevmStateManager.ts:450](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L450)

***

### generateCanonicalGenesis()

> **generateCanonicalGenesis**(`_initState`): `Promise`\<`void`\>

#### Parameters

▪ **\_initState**: `any`

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`generateCanonicalGenesis`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#generatecanonicalgenesis)

#### Source

[vm/state/src/TevmStateManager.ts:473](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L473)

***

### getAccount()

> **getAccount**(`address`): `Promise`\<`undefined` \| `Account`\>

Gets the code corresponding to the provided `address`.

#### Parameters

▪ **address**: `Address`

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`getAccount`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#getaccount)

#### Source

[vm/state/src/TevmStateManager.ts:277](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L277)

***

### getAccountAddresses()

> **getAccountAddresses**(): `string`[]

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`getAccountAddresses`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#getaccountaddresses)

#### Source

[vm/state/src/TevmStateManager.ts:477](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L477)

***

### getAccountFromProvider()

> **`private`** **getAccountFromProvider**(`address`): `Promise`\<`Account`\>

Retrieves an account from the provider and stores in the local trie

#### Parameters

▪ **address**: `Address`

Address of account to be retrieved from provider

#### Source

[vm/state/src/TevmStateManager.ts:296](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L296)

***

### getContractCode()

> **getContractCode**(`address`): `Promise`\<`Uint8Array`\>

Gets the code corresponding to the provided `address`.

#### Parameters

▪ **address**: `Address`

Address to get the `code` for

#### Returns

- Resolves with the code corresponding to the provided address.
Returns an empty `Uint8Array` if the account has no associated code.

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`getContractCode`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#getcontractcode)

#### Source

[vm/state/src/TevmStateManager.ts:137](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L137)

***

### getContractStorage()

> **getContractStorage**(`address`, `key`): `Promise`\<`Uint8Array`\>

Gets the storage value associated with the provided `address` and `key`. This method returns
the shortest representation of the stored value.

#### Parameters

▪ **address**: `Address`

Address of the account to get the storage for

▪ **key**: `Uint8Array`

Key in the account's storage to get the value for. Must be 32 bytes long.

#### Returns

- The storage value for the account
corresponding to the provided address at the provided key.
If this does not exist an empty `Uint8Array` is returned.

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`getContractStorage`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#getcontractstorage)

#### Source

[vm/state/src/TevmStateManager.ts:172](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L172)

***

### getProof()

> **getProof**(`address`, `storageSlots`): `Promise`\<`Proof`\>

Get an EIP-1186 proof from the provider

#### Parameters

▪ **address**: `Address`

address to get proof of

▪ **storageSlots**: `Uint8Array`[]= `[]`

storage slots to get proof of

#### Returns

an EIP-1186 formatted proof

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`getProof`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#getproof)

#### Source

[vm/state/src/TevmStateManager.ts:390](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L390)

***

### getStateRoot()

> **getStateRoot**(): `Promise`\<`Uint8Array`\>

:::caution[Deprecated]
This method is not used by the Tevm State Manager and is a stub required by the State Manager interface
:::

#### Returns

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`getStateRoot`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#getstateroot)

#### Source

[vm/state/src/TevmStateManager.ts:457](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L457)

***

### hasStateRoot()

> **hasStateRoot**(): `never`

:::caution[Deprecated]
This method is not used by the Tevm State Manager and is a stub required by the State Manager interface
:::

#### Returns

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`hasStateRoot`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#hasstateroot)

#### Source

[vm/state/src/TevmStateManager.ts:469](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L469)

***

### modifyAccountFields()

> **modifyAccountFields**(`address`, `accountFields`): `Promise`\<`void`\>

Gets the account associated with `address`, modifies the given account
fields, then saves the account into state. Account fields can include
`nonce`, `balance`, `storageRoot`, and `codeHash`.

#### Parameters

▪ **address**: `Address`

Address of the account to modify

▪ **accountFields**: `Partial`\<`Pick`\<`Account`, `"nonce"` \| `"balance"` \| `"storageRoot"` \| `"codeHash"`\>\>

Object containing account fields and values to modify

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`modifyAccountFields`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#modifyaccountfields)

#### Source

[vm/state/src/TevmStateManager.ts:345](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L345)

***

### putAccount()

> **putAccount**(`address`, `account`): `Promise`\<`void`\>

Saves an account into state under the provided `address`.

#### Parameters

▪ **address**: `Address`

▪ **account**: `undefined` \| `Account`

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`putAccount`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#putaccount)

#### Source

[vm/state/src/TevmStateManager.ts:318](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L318)

***

### putContractCode()

> **putContractCode**(`address`, `value`): `Promise`\<`void`\>

Adds `value` to the state trie as code, and sets `codeHash` on the account
corresponding to `address` to reference this.

#### Parameters

▪ **address**: `Address`

Address of the `account` to add the `code` for

▪ **value**: `Uint8Array`

The value of the `code`

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`putContractCode`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#putcontractcode)

#### Source

[vm/state/src/TevmStateManager.ts:155](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L155)

***

### putContractStorage()

> **putContractStorage**(`address`, `key`, `value`): `Promise`\<`void`\>

Adds value to the cache for the `account`
corresponding to `address` at the provided `key`.

#### Parameters

▪ **address**: `Address`

Address to set a storage value for

▪ **key**: `Uint8Array`

Key to set the value at. Must be 32 bytes long.

▪ **value**: `Uint8Array`

Value to set at `key` for account corresponding to `address`.
Cannot be more than 32 bytes. Leading zeros are stripped.
If it is empty or filled with zeros, deletes the value.

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`putContractStorage`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#putcontractstorage)

#### Source

[vm/state/src/TevmStateManager.ts:207](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L207)

***

### revert()

> **revert**(): `Promise`\<`void`\>

Reverts the current change-set to the instance since the
last call to checkpoint.

Partial implementation , called from the subclass.

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`revert`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#revert)

#### Source

[vm/state/src/TevmStateManager.ts:444](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L444)

***

### setBlockTag()

> **setBlockTag**(`blockTag`): `void`

Sets the new block tag and clears the internal cache

#### Parameters

▪ **blockTag**: `bigint` \| `"earliest"`

#### Source

[vm/state/src/TevmStateManager.ts:113](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L113)

***

### setStateRoot()

> **setStateRoot**(`_root`): `Promise`\<`void`\>

:::caution[Deprecated]
This method is not used by the Tevm State Manager and is a stub required by the State Manager interface
:::

#### Parameters

▪ **\_root**: `Uint8Array`

#### Returns

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`setStateRoot`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#setstateroot)

#### Source

[vm/state/src/TevmStateManager.ts:464](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L464)

***

### shallowCopy()

> **shallowCopy**(): [`TevmStateManager`](/generated/tevm/state/classes/tevmstatemanager/)

Returns a new instance of the TevmStateManager with the same opts

#### Implementation of

[`TevmStateManagerInterface`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/).[`shallowCopy`](/generated/tevm/state/interfaces/tevmstatemanagerinterface/#shallowcopy)

#### Source

[vm/state/src/TevmStateManager.ts:93](https://github.com/evmts/tevm-monorepo/blob/main/vm/state/src/TevmStateManager.ts#L93)

***
Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)