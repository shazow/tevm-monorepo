---
editUrl: false
next: false
prev: false
title: "zNetworkConfig"
---

> `const` **zNetworkConfig**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

## Type declaration

### blockTag

> **blockTag**: `ZodOptional`\<`ZodUnion`\<[`ZodLiteral`\<`"latest"`\>, `ZodLiteral`\<`"earliest"`\>, `ZodLiteral`\<`"pending"`\>, `ZodLiteral`\<`"safe"`\>, `ZodLiteral`\<`"finalized"`\>, `ZodBigInt`, `ZodEffects`\<`ZodString`, \`0x$\{string\}\`, `string`\>]\>\>

### url

> **url**: `ZodString`

## Defined in

[packages/actions/src/internal/zod/zNetworkConfig.js:4](https://github.com/evmts/tevm-monorepo/blob/main/packages/actions/src/internal/zod/zNetworkConfig.js#L4)
