[**@tevm/utils**](../README.md) • **Docs**

***

[@tevm/utils](../globals.md) / createMemoryDb

# Function: createMemoryDb()

> **createMemoryDb**(`initialDb`?): [`MemoryDb`](../type-aliases/MemoryDb.md)\<`Uint8Array`, `Uint8Array`\>

**`Internal`**

A simple ethereumjs DB instance that uses an in memory Map as it's backend
Pass in an initial DB optionally to prepoulate the DB.

## Parameters

• **initialDb?**: `Map`\<`Uint8Array`, `Uint8Array`\>

## Returns

[`MemoryDb`](../type-aliases/MemoryDb.md)\<`Uint8Array`, `Uint8Array`\>

## Defined in

[packages/utils/src/createMemoryDb.js:22](https://github.com/evmts/tevm-monorepo/blob/main/packages/utils/src/createMemoryDb.js#L22)
