**tevm** ∙ [README](../../README.md) ∙ [API](../../API.md)

***

[API](../../API.md) > [server](../README.md) > BadRequestError

# Class: BadRequestError

Error thrown when request is malformed

## Extends

- `Error`

## Constructors

### new BadRequestError(message)

> **new BadRequestError**(`message`?): [`BadRequestError`](BadRequestError.md)

#### Parameters

▪ **message?**: `string`

#### Inherited from

Error.constructor

#### Source

node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es5.d.ts:1081

### new BadRequestError(message, options)

> **new BadRequestError**(`message`?, `options`?): [`BadRequestError`](BadRequestError.md)

#### Parameters

▪ **message?**: `string`

▪ **options?**: `ErrorOptions`

#### Inherited from

Error.constructor

#### Source

node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:28

## Properties

### \_tag

> **\_tag**: `"BadRequestError"`

#### Source

vm/server/dist/index.d.ts:28

***

### cause

> **cause**?: `unknown`

#### Inherited from

Error.cause

#### Source

node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### message

> **message**: `string`

#### Inherited from

Error.message

#### Source

node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### name

> **name**: `"BadRequestError"`

#### Overrides

Error.name

#### Source

vm/server/dist/index.d.ts:24

***

### stack

> **stack**?: `string`

#### Inherited from

Error.stack

#### Source

node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### prepareStackTrace

> **`static`** **prepareStackTrace**?: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

▪ **err**: `Error`

▪ **stackTraces**: `CallSite`[]

#### Returns

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Source

node\_modules/.pnpm/@types+node@20.9.1/node\_modules/@types/node/globals.d.ts:11

***

### stackTraceLimit

> **`static`** **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Source

node\_modules/.pnpm/@types+node@20.9.1/node\_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace()

> **`static`** **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

▪ **targetObject**: `object`

▪ **constructorOpt?**: `Function`

#### Inherited from

Error.captureStackTrace

#### Source

node\_modules/.pnpm/@types+node@20.9.1/node\_modules/@types/node/globals.d.ts:4

***
Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)