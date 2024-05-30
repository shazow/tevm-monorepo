import { beforeEach, describe, expect, it } from 'bun:test'
import type { MemoryClient } from '../../MemoryClient.js'
import { createMemoryClient } from '../../createMemoryClient.js'

let mc: MemoryClient

beforeEach(async () => {
	mc = createMemoryClient()
})

describe('getBlobBaseFee', () => {
	it.todo('should work', async () => {
		expect(await mc.getBlobBaseFee()).toBe(1n)
	})
})
