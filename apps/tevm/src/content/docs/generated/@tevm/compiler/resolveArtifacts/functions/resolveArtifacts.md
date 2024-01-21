---
editUrl: false
next: false
prev: false
title: "resolveArtifacts"
---

> **resolveArtifacts**(`solFile`, `basedir`, `logger`, `config`, `includeAst`, `includeBytecode`, `fao`, `solc`): `Promise`\<[`ResolvedArtifacts`](/generated/tevm/compiler/types/type-aliases/resolvedartifacts/)\>

Resolves artifacts with solc asyncronously

## Parameters

▪ **solFile**: `string`

▪ **basedir**: `string`

▪ **logger**: [`Logger`](/generated/tevm/compiler/types/type-aliases/logger/)

▪ **config**: [`ResolvedCompilerConfig`](/generated/tevm/config/types/type-aliases/resolvedcompilerconfig/)

▪ **includeAst**: `boolean`

▪ **includeBytecode**: `boolean`

▪ **fao**: [`FileAccessObject`](/generated/tevm/compiler/types/type-aliases/fileaccessobject/)

▪ **solc**: `any`

## Source

[compiler/src/resolveArtifacts.js:7](https://github.com/evmts/tevm-monorepo/blob/main/bundler/compiler/src/resolveArtifacts.js#L7)

***
Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)