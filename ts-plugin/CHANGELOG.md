# @evmts/ts-plugin

## 0.6.0

### Patch Changes

- [#387](https://github.com/evmts/evmts-monorepo/pull/387) [`20f941e`](https://github.com/evmts/evmts-monorepo/commit/20f941e0d79ce0f0280469992c190eb3049d5286) Thanks [@roninjin10](https://github.com/roninjin10)! - Increased test coverage of ts-plugin to >98%

- [#379](https://github.com/evmts/evmts-monorepo/pull/379) [`0ff53e7`](https://github.com/evmts/evmts-monorepo/commit/0ff53e71ff792ed4df1fa180f5a72dd5d65f4142) Thanks [@roninjin10](https://github.com/roninjin10)! - Updated build pipeline to generate .d.ts files

- Updated dependencies [[`97d7aec`](https://github.com/evmts/evmts-monorepo/commit/97d7aec9844b370129b9c46ab8c19fe9d13880ec), [`0a87d1a`](https://github.com/evmts/evmts-monorepo/commit/0a87d1a290e6cdd6902d6c1c84ea56d8bc227c45), [`0ff53e7`](https://github.com/evmts/evmts-monorepo/commit/0ff53e71ff792ed4df1fa180f5a72dd5d65f4142), [`58862a6`](https://github.com/evmts/evmts-monorepo/commit/58862a6ebe6ec1e04961dbc2da6e846a02ef0692)]:
  - @evmts/bundler@0.6.0

## 0.5.7

### Patch Changes

- [#351](https://github.com/evmts/evmts-monorepo/pull/351) [`ca58f7a`](https://github.com/evmts/evmts-monorepo/commit/ca58f7a66b01a68d93585d664a77a43f67ce5bbc) Thanks [@roninjin10](https://github.com/roninjin10)! - Added support for reload when any contract in the import graph changes

- Updated dependencies [[`4fc4872`](https://github.com/evmts/evmts-monorepo/commit/4fc48722380d4390ef527ccbb27a63f73503c750), [`97cb0c1`](https://github.com/evmts/evmts-monorepo/commit/97cb0c1381f3a0b3ffa92dfcb09c397cff3190dd), [`ca58f7a`](https://github.com/evmts/evmts-monorepo/commit/ca58f7a66b01a68d93585d664a77a43f67ce5bbc)]:
  - @evmts/bundler@0.5.7

## 0.5.6

### Patch Changes

- [#345](https://github.com/evmts/evmts-monorepo/pull/345) [`31186f7`](https://github.com/evmts/evmts-monorepo/commit/31186f749ce5cd3c6e0ca4d4885975aa74512c45) Thanks [@roninjin10](https://github.com/roninjin10)! - Fixed typo breaking TS language server

- [#346](https://github.com/evmts/evmts-monorepo/pull/346) [`6d9365d`](https://github.com/evmts/evmts-monorepo/commit/6d9365db3ab197ea4ad53f777d755ee3ad562b21) Thanks [@roninjin10](https://github.com/roninjin10)! - Change naming to Evmts from EVMts

- Updated dependencies [[`31186f7`](https://github.com/evmts/evmts-monorepo/commit/31186f749ce5cd3c6e0ca4d4885975aa74512c45), [`6d9365d`](https://github.com/evmts/evmts-monorepo/commit/6d9365db3ab197ea4ad53f777d755ee3ad562b21)]:
  - @evmts/bundler@0.5.6

## 0.5.5

### Patch Changes

- Updated dependencies [[`bec7e33`](https://github.com/evmts/evmts-monorepo/commit/bec7e3303e8b241213804c42f6673a38dc7a954c)]:
  - @evmts/bundler@0.5.5

## 0.5.4

### Patch Changes

- [#340](https://github.com/evmts/evmts-monorepo/pull/340) [`9f2c254`](https://github.com/evmts/evmts-monorepo/commit/9f2c2548beaf45baf3f2c91c80751ef9cc71a81f) Thanks [@roninjin10](https://github.com/roninjin10)! - Upgraded all dependencies

- Updated dependencies [[`c9dec08`](https://github.com/evmts/evmts-monorepo/commit/c9dec084df5c5a9999a8f917405a15b11a004c02)]:
  - @evmts/bundler@0.5.4

## 0.5.3

### Patch Changes

- Updated dependencies []:
  - @evmts/bundler@0.5.3

## 0.5.2

### Patch Changes

- Updated dependencies []:
  - @evmts/bundler@0.5.2

## 0.5.1

### Patch Changes

- Updated dependencies []:
  - @evmts/bundler@0.5.1

## 0.5.0

### Minor Changes

- [#283](https://github.com/evmts/evmts-monorepo/pull/283) [`05a8efe`](https://github.com/evmts/evmts-monorepo/commit/05a8efede4acad157e3820bdba24d92f598699e5) Thanks [@roninjin10](https://github.com/roninjin10)! - Updated config schema to support etherscan

  - Solc version is now listed under `compiler.solcVersion` instead of `solc`
  - Foundry projects are now listed under `compiler.foundryProject` instead of `forge`
  - Local contracts are now specified under `localContracts.contracts` instead of `deployments`
  - New external option (unimplemented) `externalContracts` which is used to specifify contracts imported from etherscan in the next release

- [#297](https://github.com/evmts/evmts-monorepo/pull/297) [`85c340d`](https://github.com/evmts/evmts-monorepo/commit/85c340dc4a63afdbc6bd92fb4b2cf3fe0ffdc6e7) Thanks [@roninjin10](https://github.com/roninjin10)! - Added suport for non relative imports including absolute imports with baseUrl in tsconfig, imports of contracts in node_modules, and imports of contracts in foundry lib

### Patch Changes

- [#298](https://github.com/evmts/evmts-monorepo/pull/298) [`841d6a8`](https://github.com/evmts/evmts-monorepo/commit/841d6a89f4995e4f666902d27cb7dbfc3efd77e5) Thanks [@roninjin10](https://github.com/roninjin10)! - Fixed bug with etherscan links showing as undefined if they didn't exist

- Updated dependencies [[`841d6a8`](https://github.com/evmts/evmts-monorepo/commit/841d6a89f4995e4f666902d27cb7dbfc3efd77e5), [`83bf23b`](https://github.com/evmts/evmts-monorepo/commit/83bf23b0cb2eb5860f9dfb63a773541e48c62abc), [`05a8efe`](https://github.com/evmts/evmts-monorepo/commit/05a8efede4acad157e3820bdba24d92f598699e5)]:
  - @evmts/bundler@0.5.0

## 0.4.2

### Patch Changes

- Updated dependencies [[`fd6b482`](https://github.com/evmts/evmts-monorepo/commit/fd6b4825417fa81d601e9a3c5078131bc1f816c0)]:
  - @evmts/bundler@0.4.2

## 0.4.1

### Patch Changes

- Updated dependencies []:
  - @evmts/bundler@0.4.1

## 0.4.0

### Minor Changes

- [#268](https://github.com/evmts/evmts-monorepo/pull/268) [`a37844f`](https://github.com/evmts/evmts-monorepo/commit/a37844faa425d1eaca112b9a09640b7ec7e288de) Thanks [@roninjin10](https://github.com/roninjin10)! - Added support for detecting foundry.toml and remappings as tsconfig option. Set forge: true in plugin tsconfig options or forge: '/path/to/binary/forge' for a custom forge binary

### Patch Changes

- Updated dependencies [[`a37844f`](https://github.com/evmts/evmts-monorepo/commit/a37844faa425d1eaca112b9a09640b7ec7e288de)]:
  - @evmts/bundler@0.4.0

## 0.3.0

### Minor Changes

- [#259](https://github.com/evmts/evmts-monorepo/pull/259) [`7ad7463`](https://github.com/evmts/evmts-monorepo/commit/7ad746347d3e127f001abdc28fff2a10c1ffed65) Thanks [@roninjin10](https://github.com/roninjin10)! - Added bytecode to Evmts contracts

### Patch Changes

- Updated dependencies [[`7ad7463`](https://github.com/evmts/evmts-monorepo/commit/7ad746347d3e127f001abdc28fff2a10c1ffed65), [`9a9b963`](https://github.com/evmts/evmts-monorepo/commit/9a9b96327cd2f8415cf09a471a7589fa3df90394)]:
  - @evmts/bundler@0.3.0

## 0.2.0

### Minor Changes

- [#252](https://github.com/evmts/evmts-monorepo/pull/252) [`4b361ea`](https://github.com/evmts/evmts-monorepo/commit/4b361ea43fb34541bee4f75c8bea9d93543b1813) Thanks [@roninjin10](https://github.com/roninjin10)! - Changed Evmts configuration to be purely from tsconfig

### Patch Changes

- [#251](https://github.com/evmts/evmts-monorepo/pull/251) [`52732a1`](https://github.com/evmts/evmts-monorepo/commit/52732a1bcd59faa7970e5298d1e71a61c687fd67) Thanks [@roninjin10](https://github.com/roninjin10)! - Fixed missing src folder in npm packages

- Updated dependencies [[`52732a1`](https://github.com/evmts/evmts-monorepo/commit/52732a1bcd59faa7970e5298d1e71a61c687fd67), [`4b361ea`](https://github.com/evmts/evmts-monorepo/commit/4b361ea43fb34541bee4f75c8bea9d93543b1813)]:
  - @evmts/bundler@0.2.0

## 0.1.0

### Minor Changes

- [#249](https://github.com/evmts/evmts-monorepo/pull/249) [`fda2523`](https://github.com/evmts/evmts-monorepo/commit/fda25237cea8a4e94fc6dc043174810ae441fb8e) Thanks [@roninjin10](https://github.com/roninjin10)! - Added etherscan links for most major EVM networks

### Patch Changes

- [#247](https://github.com/evmts/evmts-monorepo/pull/247) [`f7ba6e5`](https://github.com/evmts/evmts-monorepo/commit/f7ba6e5546263d7a94baf50ca1010a2b505580e0) Thanks [@roninjin10](https://github.com/roninjin10)! - Switch to type module and tsup build

- Updated dependencies [[`fda2523`](https://github.com/evmts/evmts-monorepo/commit/fda25237cea8a4e94fc6dc043174810ae441fb8e), [`f7ba6e5`](https://github.com/evmts/evmts-monorepo/commit/f7ba6e5546263d7a94baf50ca1010a2b505580e0)]:
  - @evmts/bundler@0.1.0

## 0.0.3

### Patch Changes

- [#220](https://github.com/evmts/evmts-monorepo/pull/220) [`b680670`](https://github.com/evmts/evmts-monorepo/commit/b680670341fd6ddc86dabf333adbaf7b19a46fdc) Thanks [@roninjin10](https://github.com/roninjin10)! - Fixed issue with detecting relative imports starting with ../

- Updated dependencies []:
  - @evmts/bundler@0.0.3

## 0.0.2

### Patch Changes

- Updated dependencies []:
  - @evmts/bundler@0.0.2

## 0.0.1

### Patch Changes

- [`2a31d64`](https://github.com/evmts/evmts-monorepo/commit/2a31d640b61a3e3eda63e0ca0442104ea27bfaec) - Init new changesets

- Updated dependencies [[`2a31d64`](https://github.com/evmts/evmts-monorepo/commit/2a31d640b61a3e3eda63e0ca0442104ea27bfaec)]:
  - @evmts/bundler@0.0.1

## 0.0.1-next.0

### Patch Changes

- [`2a31d64`](https://github.com/evmts/evmts-monorepo/commit/2a31d640b61a3e3eda63e0ca0442104ea27bfaec) - Init new changesets

- Updated dependencies [[`2a31d64`](https://github.com/evmts/evmts-monorepo/commit/2a31d640b61a3e3eda63e0ca0442104ea27bfaec)]:
  - @evmts/bundler@0.0.1-next.0