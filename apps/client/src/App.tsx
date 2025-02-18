import { reactQueryClient } from '@repo/api/apiClient'
import { useMswInit } from '@repo/api/useMswInit'
import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/avatar'
import { FeatureCard } from '@repo/ui/featureCard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@repo/ui/styles/index.css'
import './App.css'

const queryClient = new QueryClient()

export const Layout = () => {
  const mswStatus = useMswInit()

  if (mswStatus === 'initializing') {
    return <div>Initializing app locally</div>
  }

  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}

const App = () => {
  const { isPending, error, data } = reactQueryClient.useQuery('get', '/features')

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error

  return (
    <div className="app">
      <div>
        {data.data?.features?.map(({ id, name, description, status }) => {
          return <FeatureCard key={id} title={name} description={description} status={status} />
        })}

      </div>

      <Avatar className="large-avatar">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}
