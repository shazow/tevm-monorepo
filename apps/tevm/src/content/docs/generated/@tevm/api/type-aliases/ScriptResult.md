---
editUrl: false
next: false
prev: false
title: "ScriptResult"
---

> **ScriptResult**\<`TAbi`, `TFunctionName`, `TErrorType`\>: [`ContractResult`](/generated/tevm/api/type-aliases/contractresult/)\<`TAbi`, `TFunctionName`, `TErrorType`\>

## Type parameters

| Parameter | Default |
| :------ | :------ |
| `TAbi` extends `Abi` \| readonly `unknown`[] | `Abi` |
| `TFunctionName` extends `ContractFunctionName`\<`TAbi`\> | `ContractFunctionName`\<`TAbi`\> |
| `TErrorType` | [`ScriptError`](/generated/tevm/api/type-aliases/scripterror/) |

## Source

[result/ScriptResult.ts:6](https://github.com/evmts/tevm-monorepo/blob/main/vm/api/src/result/ScriptResult.ts#L6)

***
Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)