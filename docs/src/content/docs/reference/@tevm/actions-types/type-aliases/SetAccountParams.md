---
editUrl: false
next: false
prev: false
title: "SetAccountParams"
---

> **SetAccountParams**\<`TThrowOnFail`\>: `BaseParams`\<`TThrowOnFail`\> & `object`

Tevm params to set an account in the vm state
all fields are optional except address

## Example

```ts
const accountParams: import('tevm/api').SetAccountParams = {
  account: '0x...',
  nonce: 5n,
  balance: 9000000000000n,
  storageRoot: '0x....',
  deployedBytecode: '0x....'
}
```

## Type declaration

### address

> **address**: [`Address`](/reference/tevm/utils/type-aliases/address/)

Address of account

### balance?

> `optional` **balance**: `bigint`

Balance to set account to

### deployedBytecode?

> `optional` **deployedBytecode**: [`Hex`](/reference/tevm/utils/type-aliases/hex/)

Contract bytecode to set account to

### nonce?

> `optional` **nonce**: `bigint`

Nonce to set account to

### state?

> `optional` **state**: `Record`\<[`Hex`](/reference/tevm/utils/type-aliases/hex/), [`Hex`](/reference/tevm/utils/type-aliases/hex/)\>

key-value mapping to override all slots in the account storage before executing the calls

### stateDiff?

> `optional` **stateDiff**: `Record`\<[`Hex`](/reference/tevm/utils/type-aliases/hex/), [`Hex`](/reference/tevm/utils/type-aliases/hex/)\>

key-value mapping to override individual slots in the account storage before executing the calls

### storageRoot?

> `optional` **storageRoot**: [`Hex`](/reference/tevm/utils/type-aliases/hex/)

Storage root to set account to

## Type parameters

• **TThrowOnFail** *extends* `boolean` = `boolean`

## Source

[params/SetAccountParams.ts:17](https://github.com/evmts/tevm-monorepo/blob/main/packages/actions-types/src/params/SetAccountParams.ts#L17)