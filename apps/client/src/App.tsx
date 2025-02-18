import { reactQueryClient } from '@repo/api/apiClient'
import { useMswInit } from '@repo/api/useMswInit'
import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/avatar'
import { ProfileCard } from '@repo/ui/profileCard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@repo/ui/styles/index.css'
import './App.css'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const mswStatus = useMswInit()

  if (mswStatus === 'initializing') {
    return <div>Initializing app locally</div>
  }
  return <Content />
}

const Content = () => {
  const { isPending, error, data } = reactQueryClient.useQuery('get', '/features')

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error

  return (
    <div className="app">
      <div>
        {/* <h1>{data.name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{' '}
        <strong>🍴 {data.forks_count}</strong> */}
      </div>

      <Avatar className="large-avatar">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <ProfileCard />
    </div>
  )
}
