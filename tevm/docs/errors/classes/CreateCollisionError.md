[**tevm**](../../README.md) • **Docs**

***

[tevm](../../modules.md) / [errors](../README.md) / CreateCollisionError

# Class: CreateCollisionError

Represents an execution error that occurs when a contract creation results in a collision.

Create collision errors can occur due to:
- Attempting to deploy a contract to an address that is already in use.

To debug a create collision error:
1. **Review Deployment Logic**: Ensure that the contract address is not already in use.
2. **Nonces** Check that the nonce of the account used had been incremented. Remember nonces do not update until a block is mined.
2. **Use TEVM Tracing**: Utilize TEVM tracing to step through the deployment process and identify the collision.

## Example

```typescript
import { CreateCollisionError } from '@tevm/errors'
try {
  // Some operation that can throw a CreateCollisionError
} catch (error) {
  if (error instanceof CreateCollisionError) {
    console.error(error.message);
    // Handle the create collision error
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

### new CreateCollisionError()

> **new CreateCollisionError**(`message`?, `args`?): [`CreateCollisionError`](CreateCollisionError.md)

Constructs a CreateCollisionError.
Represents an execution error that occurs when a contract creation results in a collision.

Create collision errors can occur due to:
- Attempting to deploy a contract to an address that is already in use.

To debug a create collision error:
1. **Review Deployment Logic**: Ensure that the contract address is not already in use.
2. **Nonces** Check that the nonce of the account used had been incremented. Remember nonces do not update until a block is mined.
2. **Use TEVM Tracing**: Utilize TEVM tracing to step through the deployment process and identify the collision.

#### Parameters

• **message?**: `string`

Human-readable error message.

• **args?**: [`CreateCollisionErrorParameters`](../type-aliases/CreateCollisionErrorParameters.md)

Additional parameters for the BaseError.

#### Returns

[`CreateCollisionError`](CreateCollisionError.md)

#### Overrides

[`ExecutionError`](ExecutionError.md).[`constructor`](ExecutionError.md#constructors)

#### Source

packages/errors/types/ethereum/ethereumjs/CreateCollisionError.d.ts:63

## Properties

### \_tag

> **\_tag**: `string`

Same as name, used internally.

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`_tag`](ExecutionError.md#_tag)

#### Source

packages/errors/types/ethereum/BaseError.d.ts:39

***

### cause

> **cause**: `any`

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`cause`](ExecutionError.md#cause)

#### Source

packages/errors/types/ethereum/BaseError.d.ts:64

***

### code

> **code**: `number`

Error code, analogous to the code in JSON RPC error.

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`code`](ExecutionError.md#code)

#### Source

packages/errors/types/ethereum/BaseError.d.ts:63

***

### details

> **details**: `string`

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`details`](ExecutionError.md#details)

#### Source

packages/errors/types/ethereum/BaseError.d.ts:43

***

### docsPath

> **docsPath**: `undefined` \| `string`

Path to the documentation for this error.

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`docsPath`](ExecutionError.md#docspath)

#### Source

packages/errors/types/ethereum/BaseError.d.ts:47

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

packages/errors/types/ethereum/ExecutionErrorError.d.ts:48

***

### metaMessages

> **metaMessages**: `undefined` \| `string`[]

Additional meta messages for more context.

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`metaMessages`](ExecutionError.md#metamessages)

#### Source

packages/errors/types/ethereum/BaseError.d.ts:51

***

### name

> **name**: `"ExecutionError"`

The name of the error, used to discriminate errors.

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`name`](ExecutionError.md#name)

#### Source

packages/errors/types/ethereum/ExecutionErrorError.d.ts:53

***

### shortMessage

> **shortMessage**: `string`

#### Inherited from

[`ExecutionError`](ExecutionError.md).[`shortMessage`](ExecutionError.md#shortmessage)

#### Source

packages/errors/types/ethereum/BaseError.d.ts:55

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

packages/errors/types/ethereum/BaseError.d.ts:59

***

### EVMErrorMessage

> `static` **EVMErrorMessage**: `ERROR`

#### Source

packages/errors/types/ethereum/ethereumjs/CreateCollisionError.d.ts:47

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

packages/errors/types/ethereum/BaseError.d.ts:70

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