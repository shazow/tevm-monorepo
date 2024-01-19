**@tevm/contract** ∙ [README](../README.md) ∙ [API](../API.md)

***

[API](../API.md) > Write

# Type alias: Write`<THumanReadableAbi, TBytecode, TDeployedBytecode, TAddress, TAddressArgs>`

> **Write**\<`THumanReadableAbi`, `TBytecode`, `TDeployedBytecode`, `TAddress`, `TAddressArgs`\>: `{ [TFunctionName in ExtractAbiFunctionNames<ParseAbi<THumanReadableAbi>, "payable" | "nonpayable">]: Function & Object & TAddressArgs }`

## Type parameters

| Parameter | Default |
| :------ | :------ |
| `THumanReadableAbi` extends readonly `string`[] | - |
| `TBytecode` extends `Hex` \| `undefined` | - |
| `TDeployedBytecode` extends `Hex` \| `undefined` | - |
| `TAddress` extends `Address` \| `undefined` | - |
| `TAddressArgs` | `TAddress` extends `undefined` ? `object` : `object` |

## Source

[packages/contract/src/write/Write.ts:12](https://github.com/evmts/tevm-monorepo/blob/main/packages/contract/src/write/Write.ts#L12)

***
Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)