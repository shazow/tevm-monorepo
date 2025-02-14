import { expect, test } from 'vitest'
import type { z } from 'zod'
import type { CallParams } from './CallParams.js'
import { zCallParams } from './zCallParams.js'

test('zCallParams', () => {
	const callParams: CallParams = {
		blobVersionedHashes: ['0x0000000'],
		blockTag: 'safe',
		data: '0x4242',
		gas: 0x420n,
		caller: `0x${'69'.repeat(20)}`,
		code: `0x${'69'.repeat(32)}`,
	} as const satisfies z.infer<typeof zCallParams> satisfies CallParams
	expect(zCallParams.parse(callParams)).toEqual(callParams)
	expect(() => zCallParams.parse('0x4')).toThrow()
})
