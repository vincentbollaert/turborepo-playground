import { QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { client } from '@repo/api/apiClient'
import { reactQueryClient } from '@repo/api/reactQueryClient'
import { Layout } from './layout'
import '@repo/ui/global.scss'

const mode = import.meta.env.MODE
const devDbUrl = import.meta.env.VITE_LOCAL_DATABASE_URL
const prodDbUrl = import.meta.env.VITE_PROD_DATABASE_URL

client.setConfig({
  baseUrl:
    mode === 'production'
      ? 'https://turborepo-playground-server.vercel.app/api/v1'
      : 'https://turborepo-playground-server.vercel.app/api/v1',
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={reactQueryClient}>
      <Layout />
    </QueryClientProvider>
  </StrictMode>,
)
