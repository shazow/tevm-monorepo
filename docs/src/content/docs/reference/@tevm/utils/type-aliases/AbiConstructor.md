---
editUrl: false
next: false
prev: false
title: "AbiConstructor"
---

> **AbiConstructor**: `object`

ABI ["constructor"](https://docs.soliditylang.org/en/latest/abi-spec.html#json) type

## Type declaration

### inputs

> **inputs**: readonly `AbiParameter`[]

### ~~payable?~~

> `optional` **payable**: `boolean`

#### See

https://github.com/ethereum/solidity/issues/992

:::caution[Deprecated]
use `payable` or `nonpayable` from AbiStateMutability instead
:::

### stateMutability

> **stateMutability**: `Extract`\<`AbiStateMutability`, `"payable"` \| `"nonpayable"`\>

### type

> **type**: `"constructor"`

## Defined in

node\_modules/.pnpm/abitype@1.0.4\_typescript@5.5.2\_zod@3.23.8/node\_modules/abitype/dist/types/abi.d.ts:77
