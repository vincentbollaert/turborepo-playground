import { useMswInit } from '@repo/api/useMswInit'
import { App } from './App'

export const Layout = () => {
  const mswStatus = useMswInit()

  if (mswStatus === 'initializing') {
    return <div>Initializing app locally</div>
  }

  return <App />
}
