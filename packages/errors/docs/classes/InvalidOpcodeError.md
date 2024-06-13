[**@tevm/errors**](../README.md) • **Docs**

***

[@tevm/errors](../globals.md) / InvalidOpcodeError

# Class: InvalidOpcodeError

Represents an invalid bytecode/contract error that occurs when an invalid opcode is encountered during EVM execution.
This error is typically encountered when the bytecode contains an opcode that is not recognized by the EVM.

Invalid opcode errors can occur due to:
- Typographical errors in the bytecode.
- Using opcodes that are not supported by the selected EVM version or hardfork.

To debug an invalid opcode error:
1. **Review Bytecode**: Ensure that the bytecode provided is correct and does not contain any invalid opcodes.
2. **Verify Common Configuration**: Ensure you are using a `common` with the correct hardfork and EIPs that support the opcodes used by your contract.
3. **Use TEVM Tracing**: Utilize TEVM tracing to step through the bytecode execution and identify where the invalid opcode is encountered.
4. **Inspect Contract Code**: Manually inspect the contract code to ensure it compiles correctly and does not include any invalid opcodes.

## Example

```typescript
import { InvalidOpcodeError } from '@tevm/errors'
try {
  // Some operation that can throw an InvalidOpcodeError
} catch (error) {
  if (error instanceof InvalidOpcodeError) {
    console.error(error.message);
    // Handle the invalid opcode error
  }
}
```

## Param

A human-readable error message.

## Param

Additional parameters for the BaseError.

## Extends

- [`ExecutionError`](ExecutionError.md)

## Constructors

### new InvalidOpcodeError()

> **new InvalidOpcodeError**(`message`?, `args`?): [`InvalidOpcodeError`](InvalidOpcodeError.md)

Constructs an InvalidOpcodeError.
Represents an invalid bytecode/contract error that occurs when an invalid opcode is encountered during EVM execution.
This error is typically encountered when the bytecode contains an opcode that is not recognized by the EVM.

Invalid opcode errors can occur due to:
- Typographical errors in the bytecode.
- Using opcodes that are not supported by the selected EVM version or hardfork.

To debug an invalid opcode error:
1. **Review Bytecode**: Ensure that the bytecode provided is correct and does not contain any invalid opcodes.
2. **Verify Common Configuration**: Ensure you are using a `common` with the correct hardfork and EIPs that support the opcodes used by your contract.
3. **Use TEVM Tracing**: Utilize TEVM tracing to step through the bytecode execution and identify where the invalid opcode is encountered.
4. **Inspect Contract Code**: Manually inspect the contract code to ensure it compiles correctly and does not include any invalid opcodes.

#### Parameters

• **message?**: `string`= `'Invalid opcode error occurred.'`

Human-readable error message.

• **args?**: [`InvalidOpcodeErrorParameters`](../interfaces/InvalidOpcodeErrorParameters.md)= `{}`

Additional parameters for the BaseError.

#### Returns

[`InvalidOpcodeError`](InvalidOpcodeError.md)

#### Overrides

[`ExecutionError`](ExecutionError.md).[`constructor`](ExecutionError.md#constructors)

#### Source

[packages/errors/src/ethereum/ethereumjs/InvalidOpcodeError.js:73](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/ethereumjs/InvalidOpcodeError.js#L73)

## Properties

### \_tag

> **\_tag**: `string` = `'ExecutionError'`

Same as name, used internally.

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`_tag`](ExecutionError.md#_tag)

#### Source

[packages/errors/src/ethereum/ExecutionErrorError.js:76](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/ExecutionErrorError.js#L76)

***

### cause

> **cause**: `any`

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`cause`](ExecutionError.md#cause)

#### Source

[packages/errors/src/ethereum/BaseError.js:114](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L114)

***

### code

> **code**: `number`

Error code, analogous to the code in JSON RPC error.

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`code`](ExecutionError.md#code)

#### Source

[packages/errors/src/ethereum/BaseError.js:112](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L112)

***

### details

> **details**: `string`

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`details`](ExecutionError.md#details)

#### Source

[packages/errors/src/ethereum/BaseError.js:91](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L91)

***

### docsPath

> **docsPath**: `undefined` \| `string`

Path to the documentation for this error.

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`docsPath`](ExecutionError.md#docspath)

#### Source

[packages/errors/src/ethereum/BaseError.js:96](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L96)

***

### message

> **message**: `string`

Human-readable error message.

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`message`](ExecutionError.md#message)

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### meta

> **meta**: `undefined` \| `object`

Optional object containing additional information about the error.

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`meta`](ExecutionError.md#meta)

#### Source

[packages/errors/src/ethereum/ExecutionErrorError.js:69](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/ExecutionErrorError.js#L69)

***

### metaMessages

> **metaMessages**: `undefined` \| `string`[]

Additional meta messages for more context.

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`metaMessages`](ExecutionError.md#metamessages)

#### Source

[packages/errors/src/ethereum/BaseError.js:100](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L100)

***

### name

> **name**: `"ExecutionError"` = `'ExecutionError'`

The name of the error, used to discriminate errors.

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`name`](ExecutionError.md#name)

#### Source

[packages/errors/src/ethereum/ExecutionErrorError.js:82](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/ExecutionErrorError.js#L82)

***

### shortMessage

> **shortMessage**: `string`

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`shortMessage`](ExecutionError.md#shortmessage)

#### Source

[packages/errors/src/ethereum/BaseError.js:104](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L104)

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`stack`](ExecutionError.md#stack)

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### version

> **version**: `string`

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`version`](ExecutionError.md#version)

#### Source

[packages/errors/src/ethereum/BaseError.js:108](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/BaseError.js#L108)

***

### EVMErrorMessage

> `static` **EVMErrorMessage**: `ERROR` = `EVMErrorMessage.INVALID_OPCODE`

#### Source

[packages/errors/src/ethereum/ethereumjs/InvalidOpcodeError.js:54](https://github.com/evmts/tevm-monorepo/blob/main/packages/errors/src/ethereum/ethereumjs/InvalidOpcodeError.js#L54)

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

[`ExecutionError`](ExecutionError.md).[`prepareStackTrace`](ExecutionError.md#preparestacktrace)

#### Source

node\_modules/.pnpm/@types+node@20.14.2/node\_modules/@types/node/globals.d.ts:28

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`stackTraceLimit`](ExecutionError.md#stacktracelimit)

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

[`ExecutionError`](ExecutionError.md).[`walk`](ExecutionError.md#walk)

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

[`ExecutionError`](ExecutionError.md).[`captureStackTrace`](ExecutionError.md#capturestacktrace)

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

[`ExecutionError`](ExecutionError.md).[`captureStackTrace`](ExecutionError.md#capturestacktrace)

##### Source

node\_modules/.pnpm/bun-types@1.1.12/node\_modules/bun-types/globals.d.ts:1613