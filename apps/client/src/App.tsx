import { reactQueryClient } from '@repo/api/apiClient'
import { FeatureCard } from '@repo/ui/patterns/featureCard'
import { Skeleton } from '@repo/ui/primitives/skeleton'
import { useState } from 'react'
import '@repo/ui/styles/index.css'
import './App.css'
import { Button } from '@repo/ui/components/button'

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
      <ul className="navigation">
        {(['features', 'learnings'] as const).map(tab => (
          <li key={tab}>
            <Button variant="link" size="large" onClick={() => setActiveTab(tab)}>
              {tab}
            </Button>
          </li>
        ))}
      </ul>

      {activeTab === 'features' && (
        <ul className="features">
          {/* TODO: should components know about feature model? */}
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
