import { reactQueryClient } from '@repo/api/apiClient'
import { FeatureCard } from '@repo/ui/featureCard'
import { Navigation } from '@repo/ui/navigation'
import { Skeleton } from '@repo/ui/skeleton'
import { useState } from 'react'
import '@repo/ui/index.css'
import './App.css'

export const App = () => {
  const [activeTab, setActiveTab] = useState('features')
  const { isPending, error, data } = reactQueryClient.useQuery('get', '/features')

  if (isPending) {
    return <Skeleton className="skeleton" />
  }

  if (error) {
    return 'An error has occurred: ' + error
  }

  return (
    <div className="app">
      <Navigation
        navItems={[{ title: 'features' }, { title: 'learnings' }]}
        activeNavTitle={activeTab}
        onClick={selectedNavTitle => setActiveTab(selectedNavTitle)}
      />

      {activeTab === 'features' && (
        <ul className="features">
          {data?.features?.map(({ id, name, description, status }) => {
            return <FeatureCard key={id} id={id} title={name} description={description} status={status} />
          })}
        </ul>
      )}

      {activeTab === 'learnings' && (
        <div className="learnings">
          <p>Your learnings will be displayed here.</p>
          <p>This section is under construction.</p>
        </div>
      )}
    </div>
  )
}
