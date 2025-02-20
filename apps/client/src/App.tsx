import { reactQueryClient } from '@repo/api/apiClient'
import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/avatar'
import { FeatureCard } from '@repo/ui/featureCard'
import { Skeleton } from '@repo/ui/skeleton'
import { useState } from 'react'
import '@repo/ui/styles/index.css'
import './App.css'

export const App = () => {
  const [activeTab, setActiveTab] = useState('features')
  const { isPending, error, data } = reactQueryClient.useQuery('get', '/features')

  if (isPending) {
    return <Skeleton className="w-[140px] h-[30px] rounded-full" />
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
          <ul className="divide-y divide-gray-200">
            {/* TODO: should components know about feature model? */}
            {data?.features?.map(({ id, name, description, status }) => {
              return <FeatureCard key={id} id={id} title={name} description={description} status={status} />
            })}
          </ul>
        )}

        {activeTab === 'learnings' && (
          <div className="text-center text-gray-500">
            <p>Your learnings will be displayed here.</p>
            <p>This section is under construction.</p>
          </div>
        )}
      </div>
    </div>
  )
}
