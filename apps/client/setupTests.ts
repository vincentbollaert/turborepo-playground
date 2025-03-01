import '@testing-library/jest-dom'

import { serverWorker } from '@repo/api/serverWorker'
import { afterEach, afterAll, beforeAll } from 'vitest'

beforeAll(() => {
  console.log('✅ MSW Server started')
  serverWorker.listen({ onUnhandledRequest: 'error' })
})

afterEach(() => {
  serverWorker.resetHandlers()
})

afterAll(() => {
  serverWorker.close()
  console.log('✅ MSW Server closed')
})

