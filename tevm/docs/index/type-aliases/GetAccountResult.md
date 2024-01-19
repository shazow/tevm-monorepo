**tevm** ∙ [README](../../README.md) ∙ [API](../../API.md)

***

[API](../../API.md) > [index](../README.md) > GetAccountResult

# Type alias: GetAccountResult`<ErrorType>`

> **GetAccountResult**\<`ErrorType`\>: `object`

Result of GetAccount Action

## Type parameters

| Parameter | Default |
| :------ | :------ |
| `ErrorType` | [`GetAccountError`](../../api/type-aliases/GetAccountError.md) |

## Type declaration

### address

> **address**: [`Address`](Address.md)

Address of account

### balance

> **balance**?: `bigint`

Balance to set account to

### deployedBytecode

> **deployedBytecode**?: `Hex`

Contract bytecode to set account to

### errors

> **errors**?: `ErrorType`[]

Description of the exception, if any occurred

### nonce

> **nonce**?: `bigint`

Nonce to set account to

### storageRoot

> **storageRoot**?: `Hex`

Storage root to set account to

## Source

vm/api/dist/index.d.ts:1057

***
Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)