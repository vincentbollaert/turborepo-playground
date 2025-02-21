import { reactQueryClient } from '@repo/api/apiClient'
import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/components/avatar'
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
    <div>
      <Avatar className="large-avatar">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Button variant="default" size="default">I am default lg button</Button>

      <div className="max-w-2xl mx-auto p-4">
        <nav className="mb-8">
          <ul className="flex justify-center space-x-8">
            {(['features', 'learnings'] as const).map(tab => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`text-lg font-semibold capitalize transition-colors duration-200 ${
                    activeTab === tab
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>

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
    </div>
  )
}
