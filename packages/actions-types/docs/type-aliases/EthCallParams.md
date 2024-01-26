**@tevm/actions-types** ∙ [README](../README.md) ∙ [API](../API.md)

***

[API](../API.md) > EthCallParams

# Type alias: EthCallParams`<TChain>`

> **EthCallParams**\<`TChain`\>: `Omit`\<`CallParameters`\<`TChain`\>, `"account"`\> & `object`

JSON-RPC request for `eth_call` procedure

## Type declaration

### to

> **to**: `Address`

## Type parameters

| Parameter | Default |
| :------ | :------ |
| `TChain` extends `Chain` \| `undefined` | `Chain` \| `undefined` |

## Source

[params/EthParams.ts:31](https://github.com/evmts/tevm-monorepo/blob/main/packages/actions-types/src/params/EthParams.ts#L31)

***
Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)