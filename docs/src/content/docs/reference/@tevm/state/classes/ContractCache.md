---
editUrl: false
next: false
prev: false
title: "ContractCache"
---

Contract cache is a mapping of addresses to deployedBytecode
It is implemented via extending StorageCache and hardcoding slot 0

## Constructors

### new ContractCache()

> **new ContractCache**(`storageCache`): [`ContractCache`](/reference/tevm/state/classes/contractcache/)

#### Parameters

• **storageCache**: [`StorageCache`](/reference/tevm/state/classes/storagecache/) = `...`

#### Returns

[`ContractCache`](/reference/tevm/state/classes/contractcache/)

#### Defined in

[packages/state/src/ContractCache.js:11](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/ContractCache.js#L11)

## Properties

### storageCache

> **storageCache**: [`StorageCache`](/reference/tevm/state/classes/storagecache/)

#### Defined in

[packages/state/src/ContractCache.js:17](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/ContractCache.js#L17)

## Accessors

### \_checkpoints

> `get` **\_checkpoints**(): `number`

#### Returns

`number`

#### Defined in

[packages/state/src/ContractCache.js:77](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/ContractCache.js#L77)

## Methods

### checkpoint()

> **checkpoint**(): `void`

#### Returns

`void`

#### Defined in

[packages/state/src/ContractCache.js:62](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/ContractCache.js#L62)

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/state/src/ContractCache.js:30](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/ContractCache.js#L30)

***

### commit()

> **commit**(): `void`

#### Returns

`void`

#### Defined in

[packages/state/src/ContractCache.js:23](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/ContractCache.js#L23)

***

### del()

> **del**(`address`): `void`

#### Parameters

• **address**: [`EthjsAddress`](/reference/tevm/utils/classes/ethjsaddress/)

#### Returns

`void`

#### Defined in

[packages/state/src/ContractCache.js:55](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/ContractCache.js#L55)

***

### get()

> **get**(`address`): `undefined` \| `Uint8Array`

#### Parameters

• **address**: [`EthjsAddress`](/reference/tevm/utils/classes/ethjsaddress/)

#### Returns

`undefined` \| `Uint8Array`

#### Defined in

[packages/state/src/ContractCache.js:38](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/ContractCache.js#L38)

***

### has()

> **has**(`address`): `boolean`

#### Parameters

• **address**: [`EthjsAddress`](/reference/tevm/utils/classes/ethjsaddress/)

#### Returns

`boolean`

if the cache has the key

#### Defined in

[packages/state/src/ContractCache.js:70](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/ContractCache.js#L70)

***

### put()

> **put**(`address`, `bytecode`): `void`

#### Parameters

• **address**: [`EthjsAddress`](/reference/tevm/utils/classes/ethjsaddress/)

• **bytecode**: `Uint8Array`

#### Returns

`void`

#### Defined in

[packages/state/src/ContractCache.js:47](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/ContractCache.js#L47)

***

### revert()

> **revert**(): `void`

#### Returns

`void`

#### Defined in

[packages/state/src/ContractCache.js:88](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/ContractCache.js#L88)

***

### size()

> **size**(): `number`

#### Returns

`number`

#### Defined in

[packages/state/src/ContractCache.js:81](https://github.com/evmts/tevm-monorepo/blob/main/packages/state/src/ContractCache.js#L81)
