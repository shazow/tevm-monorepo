import {
	generateDtsBody,
	generateRuntime,
	generateRuntimeSync,
} from '@evmts/runtime'
import { resolveArtifacts, resolveArtifactsSync } from '@evmts/solc'

/**
 * @type {import('./types.js').Bundler}
 */
export const bundler = (config, logger, fao, cache) => {
	return {
		name: bundler.name,
		config,
		resolveDts: async (modulePath, basedir, includeAst) => {
			try {
				const { solcInput, solcOutput, artifacts, modules, asts } =
					await resolveArtifacts(
						modulePath,
						basedir,
						logger,
						config,
						includeAst,
						fao,
						cache,
					)
				if (artifacts) {
					const evmtsImports = `import { EvmtsContract } from '@evmts/core'`
					const evmtsBody = generateDtsBody(artifacts)
					return {
						solcInput,
						solcOutput,
						asts,
						code: [evmtsImports, evmtsBody].join('\n'),
						modules,
					}
				}
				return { solcInput, solcOutput, code: '', modules, asts }
			} catch (e) {
				logger.error(/** @type {any} */ (e))
				logger.error('there was an error in evmts plugin generating .dts')
				throw e
			}
		},
		resolveDtsSync: (modulePath, basedir, includeAst) => {
			try {
				const { artifacts, modules, asts, solcInput, solcOutput } =
					resolveArtifactsSync(
						modulePath,
						basedir,
						logger,
						config,
						includeAst,
						fao,
						cache,
					)
				if (artifacts) {
					const evmtsImports = `import { EvmtsContract } from '@evmts/core'`
					const evmtsBody = generateDtsBody(artifacts)
					return {
						solcInput,
						solcOutput,
						asts,
						modules,
						code: [evmtsImports, evmtsBody].join('\n'),
					}
				}
				return { modules, code: '', asts, solcInput, solcOutput }
			} catch (e) {
				logger.error(/** @type {any} */ (e))
				logger.error('there was an error in evmts plugin resolving .dts')
				throw e
			}
		},
		resolveTsModuleSync: (modulePath, basedir, includeAst) => {
			try {
				const { solcInput, solcOutput, asts, artifacts, modules } =
					resolveArtifactsSync(
						modulePath,
						basedir,
						logger,
						config,
						includeAst,
						fao,
						cache,
					)
				const code = generateRuntimeSync(artifacts, 'ts', logger)
				return { code, modules, solcInput, solcOutput, asts }
			} catch (e) {
				logger.error(/** @type {any} */ (e))
				logger.error('there was an error in evmts plugin resolving .ts')
				throw e
			}
		},
		resolveTsModule: async (modulePath, basedir, includeAst) => {
			try {
				const { solcInput, solcOutput, asts, artifacts, modules } =
					await resolveArtifacts(
						modulePath,
						basedir,
						logger,
						config,
						includeAst,
						fao,
						cache,
					)
				const code = await generateRuntime(artifacts, 'ts', logger)
				return { code, modules, solcInput, solcOutput, asts }
			} catch (e) {
				logger.error(/** @type {any} */ (e))
				logger.error('there was an error in evmts plugin resolving .ts')
				throw e
			}
		},
		resolveCjsModuleSync: (modulePath, basedir, includeAst) => {
			try {
				const { solcInput, solcOutput, asts, artifacts, modules } =
					resolveArtifactsSync(
						modulePath,
						basedir,
						logger,
						config,
						includeAst,
						fao,
						cache,
					)
				const code = generateRuntimeSync(artifacts, 'cjs', logger)
				return { code, modules, solcInput, solcOutput, asts }
			} catch (e) {
				logger.error(/** @type {any} */ (e))
				logger.error('there was an error in evmts plugin resolving .cjs')
				throw e
			}
		},
		resolveCjsModule: async (modulePath, basedir, includeAst) => {
			try {
				const { solcInput, solcOutput, asts, artifacts, modules } =
					await resolveArtifacts(
						modulePath,
						basedir,
						logger,
						config,
						includeAst,
						fao,
						cache,
					)
				const code = await generateRuntime(artifacts, 'cjs', logger)
				return { code, modules, solcInput, solcOutput, asts }
			} catch (e) {
				logger.error(/** @type {any} */ (e))
				logger.error('there was an error in evmts plugin resolving .cjs')
				throw e
			}
		},
		resolveEsmModuleSync: (modulePath, basedir, includeAst) => {
			try {
				const { solcInput, solcOutput, asts, artifacts, modules } =
					resolveArtifactsSync(
						modulePath,
						basedir,
						logger,
						config,
						includeAst,
						fao,
						cache,
					)
				const code = generateRuntimeSync(artifacts, 'mjs', logger)
				return { code, modules, solcInput, solcOutput, asts }
			} catch (e) {
				logger.error('there was an error in evmts plugin resolving .mjs')
				logger.error(/** @type {any} */ (e))
				throw e
			}
		},
		resolveEsmModule: async (modulePath, basedir, includeAst) => {
			try {
				const { solcInput, solcOutput, asts, artifacts, modules } =
					await resolveArtifacts(
						modulePath,
						basedir,
						logger,
						config,
						includeAst,
						fao,
						cache,
					)
				const code = await generateRuntime(artifacts, 'mjs', logger)
				return { code, modules, solcInput, solcOutput, asts }
			} catch (e) {
				logger.error(/** @type {any} */ (e))
				logger.error('there was an error in evmts plugin resolving .mjs')
				throw e
			}
		},
	}
}