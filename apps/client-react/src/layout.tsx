import { useMswInit } from '@repo/api/hooks'
import { Home } from './home/home'
import { useState } from 'react'
import { MockSelector } from '@repo/ui/mockSelector'
import { Navigation } from '@repo/ui/navigation'
import { Frame } from '@repo/ui/frame'
import { Tab } from './types'
import { Socials } from '@repo/ui/socials'

export const Layout = () => {
  const [activeTab, setActiveTab] = useState<Tab>('features')

  const mswStatus = useMswInit()
  if (mswStatus === 'initializing') {
    return null
  }

  return (
    <Frame>
      <Frame.Main>
        <Navigation<Tab>
          navItems={[{ title: 'features' }, { title: 'learnings' }]}
          activeNavTitle={activeTab}
          onClick={selectedNavTitle => setActiveTab(selectedNavTitle)}
        />
        <Home activeTab={activeTab} />
      </Frame.Main>

      <Frame.Aside>
        <Frame.Aside.Block>
          <MockSelector />
        </Frame.Aside.Block>

        <Frame.Aside.Block>
          <Socials />
        </Frame.Aside.Block>
      </Frame.Aside>
    </Frame>
  )
}
