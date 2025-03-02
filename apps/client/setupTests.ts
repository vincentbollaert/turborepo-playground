import '@testing-library/jest-dom'

import { serverWorker } from '@repo/api/serverWorker'
import { testQueryClient } from '@repo/vitest-config/testUtils'
import { client } from '@repo/api/apiClient'
import { afterEach, afterAll, beforeAll } from 'vitest'

beforeAll(() => {
  client.setConfig({
    baseUrl: 'http://localhost:5173/api/v1',
  })
  serverWorker.listen({ onUnhandledRequest: 'error' })
})

afterEach(() => {
  serverWorker.resetHandlers()
  testQueryClient.clear()
})

afterAll(() => {
  serverWorker.close()
})
