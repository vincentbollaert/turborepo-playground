import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { client } from '@repo/api/apiClient'
import { Layout } from './layout'
import '@repo/ui/global.scss'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

client.setConfig({
  baseUrl: 'http://localhost:5173/api/v1',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  </StrictMode>,
)
