**tevm** ∙ [README](../../README.md) ∙ [API](../../API.md)

***

[API](../../API.md) > [procedures-types](../README.md) > JsonRpcTransaction

# Type alias: JsonRpcTransaction

> **JsonRpcTransaction**: `object`

the transaction call object for methods like `eth_call`

## Type declaration

### data

> **data**?: [`Hex`](../../index/type-aliases/Hex.md)

The hash of the method signature and encoded parameters. For more information, see the Contract ABI description in the Solidity documentation

### from

> **from**: [`Address`](../../index/type-aliases/Address.md)

The address from which the transaction is sent

### gas

> **gas**?: [`Hex`](../../index/type-aliases/Hex.md)

The integer of gas provided for the transaction execution

### gasPrice

> **gasPrice**?: [`Hex`](../../index/type-aliases/Hex.md)

The integer of gasPrice used for each paid gas encoded as hexadecimal

### to

> **to**?: [`Address`](../../index/type-aliases/Address.md)

The address to which the transaction is addressed

### value

> **value**?: [`Hex`](../../index/type-aliases/Hex.md)

The integer of value sent with this transaction encoded as hexadecimal

## Source

packages/procedures-types/dist/index.d.ts:153

***
Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)