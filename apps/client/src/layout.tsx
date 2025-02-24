import { useMswInit } from '@repo/api/hooks'
import { Home } from './home/home'
import { useState } from 'react'
import { MockSelector } from './components/mockSelector/MockSelector'
import { Navigation } from '@repo/ui/navigation'
import { Frame } from '@repo/ui/frame'
import { Tab } from './types'

export const Layout = () => {
  const [activeTab, setActiveTab] = useState<Tab>('features')

  const mswStatus = useMswInit()
  if (mswStatus === 'initializing') {
    return null
  }

  return (
    <Frame>
      <Navigation<Tab>
        navItems={[{ title: 'features' }, { title: 'learnings' }]}
        activeNavTitle={activeTab}
        onClick={selectedNavTitle => setActiveTab(selectedNavTitle)}
      />
      <Home activeTab={activeTab} />
      <MockSelector />
    </Frame>
  )
}
