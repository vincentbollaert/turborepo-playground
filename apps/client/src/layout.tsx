import { useMswInit } from '@repo/api/hooks'
import { Features } from './features/features'
import { useState } from 'react'
import { MockSelector } from './components/mockSelector/MockSelector'
import { Navigation } from '@repo/ui/navigation'
import styles from './layout.module.scss'
import { Tab } from './types'

export const Layout = () => {
  const [activeTab, setActiveTab] = useState<Tab>('features')

  const mswStatus = useMswInit()
  if (mswStatus === 'initializing') {
    return null
  }

  return (
    <main className={styles.layout}>
      <Navigation<Tab>
        navItems={[{ title: 'features' }, { title: 'learnings' }]}
        activeNavTitle={activeTab}
        onClick={selectedNavTitle => setActiveTab(selectedNavTitle)}
      />
      <Features activeTab={activeTab} />
      <MockSelector />
    </main>
  )
}
