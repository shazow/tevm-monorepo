[**tevm**](../../README.md) • **Docs**

***

[tevm](../../modules.md) / [state](../README.md) / originalStorageCache

# Function: originalStorageCache()

> **originalStorageCache**(`baseState`, `skipFetchingFromFork`?): `object`

Commits the current change-set to the instance since the
last call to checkpoint.

## Parameters

• **baseState**: [`BaseState`](../type-aliases/BaseState.md)

• **skipFetchingFromFork?**: `boolean`

## Returns

`object`

### clear()

#### Returns

`void`

### get()

#### Parameters

• **address**: [`EthjsAddress`](../../utils/classes/EthjsAddress.md)

• **key**: `Uint8Array`

#### Returns

`Promise`\<`Uint8Array`\>

## Defined in

packages/state/dist/index.d.ts:378
