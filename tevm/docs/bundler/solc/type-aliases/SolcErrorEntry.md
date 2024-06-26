[**tevm**](../../../README.md) • **Docs**

***

[tevm](../../../modules.md) / [bundler/solc](../README.md) / SolcErrorEntry

# Type Alias: SolcErrorEntry

> **SolcErrorEntry**: `object`

## Type declaration

### component

> **component**: `string`

### errorCode?

> `optional` **errorCode**: `string`

### formattedMessage?

> `optional` **formattedMessage**: `string`

### message

> **message**: `string`

### secondarySourceLocations?

> `optional` **secondarySourceLocations**: [`SolcSecondarySourceLocation`](SolcSecondarySourceLocation.md)[]

### severity

> **severity**: `"error"` \| `"warning"` \| `"info"`

### sourceLocation?

> `optional` **sourceLocation**: [`SolcSourceLocation`](SolcSourceLocation.md)

### type

> **type**: `string`

## Defined in

bundler-packages/solc/types/src/solcTypes.d.ts:104