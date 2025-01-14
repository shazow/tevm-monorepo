[**tevm**](../../README.md) • **Docs**

***

[tevm](../../modules.md) / [utils](../README.md) / EthjsAddress

# Class: EthjsAddress

Handling and generating Ethereum addresses

## Extended by

- [`Address`](../../address/classes/Address.md)

## Constructors

### new EthjsAddress()

> **new EthjsAddress**(`bytes`): [`EthjsAddress`](EthjsAddress.md)

#### Parameters

• **bytes**: `Uint8Array`

#### Returns

[`EthjsAddress`](EthjsAddress.md)

#### Defined in

node\_modules/.pnpm/@ethereumjs+util@9.0.3/node\_modules/@ethereumjs/util/dist/esm/address.d.ts:6

## Properties

### bytes

> `readonly` **bytes**: `Uint8Array`

#### Defined in

node\_modules/.pnpm/@ethereumjs+util@9.0.3/node\_modules/@ethereumjs/util/dist/esm/address.d.ts:5

## Methods

### equals()

> **equals**(`address`): `boolean`

Is address equal to another.

#### Parameters

• **address**: [`EthjsAddress`](EthjsAddress.md)

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/@ethereumjs+util@9.0.3/node\_modules/@ethereumjs/util/dist/esm/address.d.ts:42

***

### isPrecompileOrSystemAddress()

> **isPrecompileOrSystemAddress**(): `boolean`

True if address is in the address range defined
by EIP-1352

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/@ethereumjs+util@9.0.3/node\_modules/@ethereumjs/util/dist/esm/address.d.ts:51

***

### isZero()

> **isZero**(): `boolean`

Is address zero.

#### Returns

`boolean`

#### Defined in

node\_modules/.pnpm/@ethereumjs+util@9.0.3/node\_modules/@ethereumjs/util/dist/esm/address.d.ts:46

***

### toBytes()

> **toBytes**(): `Uint8Array`

Returns a new Uint8Array representation of address.

#### Returns

`Uint8Array`

#### Defined in

node\_modules/.pnpm/@ethereumjs+util@9.0.3/node\_modules/@ethereumjs/util/dist/esm/address.d.ts:59

***

### toString()

> **toString**(): `string`

Returns hex encoding of address.

#### Returns

`string`

#### Defined in

node\_modules/.pnpm/@ethereumjs+util@9.0.3/node\_modules/@ethereumjs/util/dist/esm/address.d.ts:55

***

### fromPrivateKey()

> `static` **fromPrivateKey**(`privateKey`): [`EthjsAddress`](EthjsAddress.md)

Returns an address for a given private key.

#### Parameters

• **privateKey**: `Uint8Array`

A private key must be 256 bits wide

#### Returns

[`EthjsAddress`](EthjsAddress.md)

#### Defined in

node\_modules/.pnpm/@ethereumjs+util@9.0.3/node\_modules/@ethereumjs/util/dist/esm/address.d.ts:25

***

### fromPublicKey()

> `static` **fromPublicKey**(`pubKey`): [`EthjsAddress`](EthjsAddress.md)

Returns an address for a given public key.

#### Parameters

• **pubKey**: `Uint8Array`

The two points of an uncompressed key

#### Returns

[`EthjsAddress`](EthjsAddress.md)

#### Defined in

node\_modules/.pnpm/@ethereumjs+util@9.0.3/node\_modules/@ethereumjs/util/dist/esm/address.d.ts:20

***

### fromString()

> `static` **fromString**(`str`): [`EthjsAddress`](EthjsAddress.md)

Returns an Address object from a hex-encoded string.

#### Parameters

• **str**: `string`

Hex-encoded address

#### Returns

[`EthjsAddress`](EthjsAddress.md)

#### Defined in

node\_modules/.pnpm/@ethereumjs+util@9.0.3/node\_modules/@ethereumjs/util/dist/esm/address.d.ts:15

***

### generate()

> `static` **generate**(`from`, `nonce`): [`EthjsAddress`](EthjsAddress.md)

Generates an address for a newly created contract.

#### Parameters

• **from**: [`EthjsAddress`](EthjsAddress.md)

The address which is creating this new address

• **nonce**: `bigint`

The nonce of the from account

#### Returns

[`EthjsAddress`](EthjsAddress.md)

#### Defined in

node\_modules/.pnpm/@ethereumjs+util@9.0.3/node\_modules/@ethereumjs/util/dist/esm/address.d.ts:31

***

### generate2()

> `static` **generate2**(`from`, `salt`, `initCode`): [`EthjsAddress`](EthjsAddress.md)

Generates an address for a contract created using CREATE2.

#### Parameters

• **from**: [`EthjsAddress`](EthjsAddress.md)

The address which is creating this new address

• **salt**: `Uint8Array`

A salt

• **initCode**: `Uint8Array`

The init code of the contract being created

#### Returns

[`EthjsAddress`](EthjsAddress.md)

#### Defined in

node\_modules/.pnpm/@ethereumjs+util@9.0.3/node\_modules/@ethereumjs/util/dist/esm/address.d.ts:38

***

### zero()

> `static` **zero**(): [`EthjsAddress`](EthjsAddress.md)

Returns the zero address.

#### Returns

[`EthjsAddress`](EthjsAddress.md)

#### Defined in

node\_modules/.pnpm/@ethereumjs+util@9.0.3/node\_modules/@ethereumjs/util/dist/esm/address.d.ts:10
