---
editUrl: false
next: false
prev: false
title: "vitePluginTevm"
---

> **vitePluginTevm**(`options`?): `Plugin`\<`any`\>

Vite plugin for tevm. Enables Solidity imports in JavaScript. Once enabled the code
will transform solidity contract imports into Tevm `Contract` instances.

To configure add this plugin to your vite config and add the ts-plugin to your tsconfig.json

## Parameters

• **options?**

• **options.solc?**: [`SolcVersions`](/reference/tevm/solc/type-aliases/solcversions/)

## Returns

`Plugin`\<`any`\>

## Defined in

[bundler-packages/vite/src/vitePluginTevm.js:73](https://github.com/evmts/tevm-monorepo/blob/main/bundler-packages/vite/src/vitePluginTevm.js#L73)
