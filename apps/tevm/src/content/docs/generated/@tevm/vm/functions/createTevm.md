---
editUrl: false
next: false
prev: false
title: "createTevm"
---

> **createTevm**(`options`?): `Promise`\<[`Tevm`](/generated/tevm/vm/type-aliases/tevm/)\>

A local EVM instance running in JavaScript. Similar to Anvil in your browser

## Parameters

▪ **options?**: [`CreateEVMOptions`](/generated/tevm/vm/type-aliases/createevmoptions/)= `{}`

## Returns

## Example

```ts
import { Tevm } from "tevm"
import { createPublicClient, http } from "viem"
import { MyERC721 } from './MyERC721.sol'

const tevm = Tevm.create({
	fork: {
	  url: "https://mainnet.optimism.io",
	},
})

const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',

await tevm.runContractCall(
  MyERC721.write.mint({
    caller: address,
  }),
)

const balance = await tevm.runContractCall(
 MyERC721.read.balanceOf({
 caller: address,
 }),
 )
 console.log(balance) // 1n
 ```

## Source

[vm/vm/src/createTevm.js:57](https://github.com/evmts/tevm-monorepo/blob/main/vm/vm/src/createTevm.js#L57)

***
Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)