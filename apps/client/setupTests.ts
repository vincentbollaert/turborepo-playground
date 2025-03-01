import '@testing-library/jest-dom'

import { serverWorker } from '@repo/api/serverWorker'
import { client } from '@repo/api/apiClient'
import { afterEach, afterAll, beforeAll } from 'vitest'

beforeAll(() => {
  client.setConfig({
    baseUrl: 'http://localhost:5173/api/v1',
  })
  serverWorker.listen({ onUnhandledRequest: 'error' })
  console.log('✅ MSW Server started')
})

afterEach(() => {
  serverWorker.resetHandlers()
})

afterAll(() => {
  serverWorker.close()
  console.log('✅ MSW Server closed')
})
