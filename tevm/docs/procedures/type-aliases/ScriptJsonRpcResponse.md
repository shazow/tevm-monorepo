[**tevm**](../../README.md) • **Docs**

***

[tevm](../../modules.md) / [procedures](../README.md) / ScriptJsonRpcResponse

# Type Alias: ~~ScriptJsonRpcResponse~~

> **ScriptJsonRpcResponse**: [`JsonRpcResponse`](../../index/type-aliases/JsonRpcResponse.md)\<`"tevm_script"`, [`SerializeToJson`](SerializeToJson.md)\<[`CallResult`](../../index/type-aliases/CallResult.md)\>, [`TevmScriptError`](../../index/type-aliases/TevmScriptError.md)\[`"code"`\]\>

## Deprecated

Use CallJsonRpcProcedure instead
JSON-RPC response for `tevm_script` method

## Example

```ts
import { createMemoryClient } from 'tevm'

const tevm = createMemoryClient()

const respose: ScriptJsonRpcResponse = await tevm.request({
  method: 'tevm_script',
  params: {
    deployedBytecode: '608...',
    abi: [...],
    args: [...]
})
```

## Defined in

packages/procedures/dist/index.d.ts:974
