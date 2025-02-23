import { reactQueryClient } from '@repo/api/apiClient'
import { FeatureCard } from '@repo/ui/featureCard'
import { Skeleton } from '@repo/ui/skeleton'
import styles from './features.module.scss'
import { Info } from '@repo/ui/info'
import type { Tab } from '../types'

export const Features = ({ activeTab }: { activeTab: Tab }) => {
  const { isSuccess, isPending, error, data } = reactQueryClient.useQuery('get', '/features')

  if (isPending) {
    return <Skeleton className={styles.skeleton} />
  }

  if (isSuccess && !data.features?.length) {
    return <Info variant="info" message="No features found" />
  }

  if (error) {
    return 'An error has occurred: ' + error
  }

  return (
    <>
      {activeTab === 'features' && (
        <ul className={styles.features}>
          {data?.features?.map(({ id, name, description, status }) => {
            return <FeatureCard key={id} id={id} title={name} description={description} status={status} />
          })}
        </ul>
      )}

      {activeTab === 'learnings' && (
        <div className={styles.learnings}>
          <p>Your learnings will be displayed here.</p>
          <p>This section is under construction.</p>
        </div>
      )}
    </>
  )
}
