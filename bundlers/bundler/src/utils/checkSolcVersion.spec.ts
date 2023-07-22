import { checkSolcVersion } from './checkSolcVersion'
import { describe, expect, it, vi } from 'vitest'

describe(checkSolcVersion.name, () => {
	it('should warn if the solc version in the config does not match the solc version installed', () => {
		const logger = { warn: vi.fn() }
		const config = { compiler: { solcVersion: '0.8.20' } }
		const version = '0.8.1'
		checkSolcVersion(config as any, logger as any, version)
		checkSolcVersion(config as any, console as any, version)
		expect(logger.warn).toHaveBeenCalledOnce()
		expect(logger.warn.mock.lastCall).toMatchInlineSnapshot(`
			[
			  "The solc version in the config (0.8.20) does not match the solc version installed (0.8.1).
			This may cause unexpected behavior.
			Consider updating the version in package.json to \\"solc\\": \\"0.8.20\\"
			or if this is the correct version updating the version in the evmts plugin config.",
			]
		`)
	})
	it('should not warn if the solc version in the config matches the solc version installed', () => {
		const logger = { warn: vi.fn() }
		const config = { compiler: { solcVersion: '0.8.0' } }
		const version = '0.8.0'
		checkSolcVersion(config as any, logger as any, version)
		expect(logger.warn).not.toHaveBeenCalled()
	})
	// solc is not typesafe so make sure it works with unmocked solc
	it('should work with unmocked solc', () => {
		const logger = { warn: vi.fn() }
		const config = { compiler: { solcVersion: '0.8.20' } }
		checkSolcVersion(config as any, logger as any, '0.8.20')
		expect(logger.warn).not.toHaveBeenCalled()
		checkSolcVersion(config as any, logger as any, '0.8.21')
		expect(logger.warn).toHaveBeenCalledOnce()
		expect(logger.warn.mock.lastCall).toMatchInlineSnapshot(`
			[
			  "The solc version in the config (0.8.20) does not match the solc version installed (0.8.21).
			This may cause unexpected behavior.
			Consider updating the version in package.json to \\"solc\\": \\"0.8.20\\"
			or if this is the correct version updating the version in the evmts plugin config.",
			]
		`)
	})
})