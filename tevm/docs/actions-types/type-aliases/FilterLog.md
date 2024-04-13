**tevm** ∙ [README](../../README.md) ∙ [API](../../API.md)

***

[API](../../API.md) > [actions-types](../README.md) > FilterLog

# Type alias: FilterLog

> **FilterLog**: `object`

FilterLog type for eth JSON-RPC procedures

## Type declaration

### address

> **`readonly`** **address**: [`Hex`](Hex.md)

### blockHash

> **`readonly`** **blockHash**: [`Hex`](Hex.md)

### blockNumber

> **`readonly`** **blockNumber**: `bigint`

### data

> **`readonly`** **data**: [`Hex`](Hex.md)

### logIndex

> **`readonly`** **logIndex**: `bigint`

### removed

> **`readonly`** **removed**: `boolean`

### topics

> **`readonly`** **topics**: readonly [`Hex`](Hex.md)[]

### transactionHash

> **`readonly`** **transactionHash**: [`Hex`](Hex.md)

### transactionIndex

> **`readonly`** **transactionIndex**: `bigint`

## Source

packages/actions-types/types/common/FilterLog.d.ts:5

***
Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)