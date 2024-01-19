---
editUrl: false
next: false
prev: false
title: "CallHandler"
---

> **CallHandler**: (`action`) => `Promise`\<[`CallResult`](/generated/tevm/api/type-aliases/callresult/)\>

Executes a call against the VM. It is similar to `eth_call` but has more
options for controlling the execution environment

See `contract` and `script` which executes calls specifically against deployed contracts
or undeployed scripts

## Parameters

▪ **action**: [`CallParams`](/generated/tevm/api/type-aliases/callparams/)

## Returns

## Example

```ts
const res = tevm.call({
to: '0x123...',
data: '0x123...',
from: '0x123...',
gas: 1000000,
gasPrice: 1n,
skipBalance: true,
}
```

## Source

[handlers/CallHandler.ts:20](https://github.com/evmts/tevm-monorepo/blob/main/vm/api/src/handlers/CallHandler.ts#L20)

***
Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)