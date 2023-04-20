## Installation

To use EVMts install EVMts and it's plugins

### Install `@evmts/core`

npm
::: code-group

```bash [npm]
npm install @evmts/core
```

```bash [pnpm]
pnpm install @evmts/core
```

```bash [yarn]
yarn add @evmts/core
```

:::

### Install EVMts build plugins

EVMts plugins give you a tight typescript integration with your solidity contracts

- Solidity file imports directly in typescript files
- Autoimports, autocompletion, and typesafety in your editor
- Can be used with other libraries including [viem](../guide/viem-usage.md) and [ethers.js](../guide/ethers-usage.md)

::: tip
Unable to use a build plugin? See the guide [using EVMts without plugins](../guide/using-evmts-without-plugins.md).
:::

Install [@evmts/plugin-rollup](../plugin-reference/rollup.md) and [@evmts/plugin-ts](../plugin-reference/rollup.md)

::: code-group

```bash [npm]
npm i @evmts/plugin-rollup @evmts/plugin-ts
```

```bash [pnpm]
pnpm i @evmts/plugin-rollup @evmts/plugin-ts
```

```bash [yarn]
yarn add @evmts/plugin-rollup @evmts/plugin-ts
```

:::