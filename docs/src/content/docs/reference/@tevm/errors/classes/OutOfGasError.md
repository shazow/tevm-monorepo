---
editUrl: false
next: false
prev: false
title: "OutOfGasError"
---

Represents an execution error that occurs when a transaction runs out of gas during execution.
This error is typically encountered when the gas provided for a transaction is insufficient to complete its execution.

Out of gas errors can occur due to:
- Insufficient gas provided for complex transactions or loops.
- Incorrect estimation of gas required for certain operations.
- Contracts with high gas consumption in specific functions.
- Non-deterministic gas usage in contracts.
- If TEVM submitted the transaction using `createTransaction: true` and the account being used runs out of gas.

To debug an out of gas error:
1. **Review Gas Estimates**: Ensure that the gas estimate for your transaction is accurate and sufficient. If you provided explicit gas-related parameters, double-check their values.
2. **Optimize Contract Code**: Refactor your smart contract code to reduce gas consumption, especially in loops and complex operations. Remove potential non-deterministic behaviors.
3. **Use TEVM Tracing**: Utilize TEVM tracing to step through the transaction and inspect gas usage.
4. **Estimate Gas Multiple Times**: If using TEVM gas estimations, it might make sense to estimate gas many times and take the worst case to set `gasPrice`. Most nodes execute `eth_estimateGas` 10 times, while TEVM runs it only once.
5. **Use Other Tools**: Use other tools with gas profiling such as [Foundry](https://book.getfoundry.sh/forge/gas).

## Example

```typescript
try {
  // Some operation that can throw an OutOfGasError
} catch (error) {
  if (error instanceof OutOfGasError) {
    console.error(error.message);
    // Handle the out of gas error
  }
}
```

## Param

A human-readable error message.

## Param

Additional parameters for the BaseError.

## Extends

- [`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/)

## Constructors

### new OutOfGasError()

> **new OutOfGasError**(`message`?, `args`?): [`OutOfGasError`](/reference/tevm/errors/classes/outofgaserror/)

Constructs an OutOfGasError.
Represents an execution error that occurs when a transaction runs out of gas during execution.
This error is typically encountered when the gas provided for a transaction is insufficient to complete its execution.

Out of gas errors can occur due to:
- Insufficient gas provided for complex transactions or loops.
- Incorrect estimation of gas required for certain operations.
- Contracts with high gas consumption in specific functions.
- Non-deterministic gas usage in contracts.
- If TEVM submitted the transaction using `createTransaction: true` and the account being used runs out of gas.

To debug an out of gas error:
1. **Review Gas Estimates**: Ensure that the gas estimate for your transaction is accurate and sufficient. If you provided explicit gas-related parameters, double-check their values.
2. **Optimize Contract Code**: Refactor your smart contract code to reduce gas consumption, especially in loops and complex operations. Remove potential non-deterministic behaviors.
3. **Use TEVM Tracing**: Utilize TEVM tracing to step through the transaction and inspect gas usage.
4. **Estimate Gas Multiple Times**: If using TEVM gas estimations, it might make sense to estimate gas many times and take the worst case to set `gasPrice`. Most nodes execute `eth_estimateGas` 10 times, while TEVM runs it only once.
5. **Use Other Tools**: Use other tools with gas profiling such as [Foundry](https://book.getfoundry.sh/forge/gas).

#### Parameters

• **message?**: `string`= `'Out of gas error occurred.'`

Human-readable error message.

• **args?**: [`OutOfGasErrorParameters`](/reference/tevm/errors/interfaces/outofgaserrorparameters/)= `{}`

Additional parameters for the BaseError.

#### Returns

[`OutOfGasError`](/reference/tevm/errors/classes/outofgaserror/)

#### Overrides

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`constructor`](/reference/tevm/errors/classes/gaslimitexceedederror/#constructors)

#### Source

[packages/errors/src/ethereum/ethereumjs/OutOfGasError.js:80](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/ethereumjs/OutOfGasError.js#L80)

## Properties

### \_tag

> **\_tag**: `string` = `'GasLimitExceeded'`

Same as name, used internally.

#### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`_tag`](/reference/tevm/errors/classes/gaslimitexceedederror/#_tag)

#### Source

[packages/errors/src/ethereum/GasLimitExceededError.js:76](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/GasLimitExceededError.js#L76)

***

### cause

> **cause**: `any`

#### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`cause`](/reference/tevm/errors/classes/gaslimitexceedederror/#cause)

#### Source

[packages/errors/src/ethereum/BaseError.js:114](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L114)

***

### code

> **code**: `number`

Error code, analogous to the code in JSON RPC error.

#### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`code`](/reference/tevm/errors/classes/gaslimitexceedederror/#code)

#### Source

[packages/errors/src/ethereum/BaseError.js:112](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L112)

***

### details

> **details**: `string`

#### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`details`](/reference/tevm/errors/classes/gaslimitexceedederror/#details)

#### Source

[packages/errors/src/ethereum/BaseError.js:91](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L91)

***

### docsPath

> **docsPath**: `undefined` \| `string`

Path to the documentation for this error.

#### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`docsPath`](/reference/tevm/errors/classes/gaslimitexceedederror/#docspath)

#### Source

[packages/errors/src/ethereum/BaseError.js:96](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L96)

***

### message

> **message**: `string`

Human-readable error message.

#### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`message`](/reference/tevm/errors/classes/gaslimitexceedederror/#message)

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### meta

> **meta**: `undefined` \| `object`

Optional object containing additional information about the error.

#### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`meta`](/reference/tevm/errors/classes/gaslimitexceedederror/#meta)

#### Source

[packages/errors/src/ethereum/GasLimitExceededError.js:68](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/GasLimitExceededError.js#L68)

***

### metaMessages

> **metaMessages**: `undefined` \| `string`[]

Additional meta messages for more context.

#### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`metaMessages`](/reference/tevm/errors/classes/gaslimitexceedederror/#metamessages)

#### Source

[packages/errors/src/ethereum/BaseError.js:100](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L100)

***

### name

> **name**: `string` = `'GasLimitExceeded'`

The name of the error, used to discriminate errors.

#### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`name`](/reference/tevm/errors/classes/gaslimitexceedederror/#name)

#### Source

[packages/errors/src/ethereum/GasLimitExceededError.js:83](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/GasLimitExceededError.js#L83)

***

### shortMessage

> **shortMessage**: `string`

#### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`shortMessage`](/reference/tevm/errors/classes/gaslimitexceedederror/#shortmessage)

#### Source

[packages/errors/src/ethereum/BaseError.js:104](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L104)

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`stack`](/reference/tevm/errors/classes/gaslimitexceedederror/#stack)

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### version

> **version**: `string`

#### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`version`](/reference/tevm/errors/classes/gaslimitexceedederror/#version)

#### Source

[packages/errors/src/ethereum/BaseError.js:108](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L108)

***

### EVMErrorMessage

> `static` **EVMErrorMessage**: [`EvmErrorMessage`](/reference/tevm/evm/enumerations/evmerrormessage/) = `EVMErrorMessage.OUT_OF_GAS`

#### Source

[packages/errors/src/ethereum/ethereumjs/OutOfGasError.js:57](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/ethereumjs/OutOfGasError.js#L57)

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`prepareStackTrace`](/reference/tevm/errors/classes/gaslimitexceedederror/#preparestacktrace)

#### Source

node\_modules/.pnpm/@types+node@20.14.2/node\_modules/@types/node/globals.d.ts:28

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`stackTraceLimit`](/reference/tevm/errors/classes/gaslimitexceedederror/#stacktracelimit)

#### Source

node\_modules/.pnpm/@types+node@20.14.2/node\_modules/@types/node/globals.d.ts:30

## Methods

### walk()

> **walk**(`fn`?): `unknown`

Walks through the error chain.

#### Parameters

• **fn?**: `Function`

A function to execute on each error in the chain.

#### Returns

`unknown`

The first error that matches the function, or the original error.

#### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`walk`](/reference/tevm/errors/classes/gaslimitexceedederror/#walk)

#### Source

[packages/errors/src/ethereum/BaseError.js:137](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L137)

***

### captureStackTrace()

#### captureStackTrace(targetObject, constructorOpt)

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

##### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

##### Returns

`void`

##### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`captureStackTrace`](/reference/tevm/errors/classes/gaslimitexceedederror/#capturestacktrace)

##### Source

node\_modules/.pnpm/@types+node@20.14.2/node\_modules/@types/node/globals.d.ts:21

#### captureStackTrace(targetObject, constructorOpt)

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

##### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

##### Returns

`void`

##### Inherited from

[`GasLimitExceededError`](/reference/tevm/errors/classes/gaslimitexceedederror/).[`captureStackTrace`](/reference/tevm/errors/classes/gaslimitexceedederror/#capturestacktrace)

##### Source

node\_modules/.pnpm/bun-types@1.1.12/node\_modules/bun-types/globals.d.ts:1613