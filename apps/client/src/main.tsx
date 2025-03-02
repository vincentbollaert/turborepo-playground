import { QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { client } from '@repo/api/apiClient'
import { reactQueryClient } from '@repo/api/reactQueryClient'
import { Layout } from './layout'
import '@repo/ui/global.scss'

client.setConfig({
  baseUrl: 'http://localhost:5173/api/v1',
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={reactQueryClient}>
      <Layout />
    </QueryClientProvider>
  </StrictMode>,
)
