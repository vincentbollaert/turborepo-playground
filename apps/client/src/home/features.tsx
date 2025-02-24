import { reactQueryClient } from '@repo/api/apiClient'
import { FeatureCard } from '@repo/ui/featureCard'
import { Skeleton } from '@repo/ui/skeleton'
import styles from './home.module.scss'
import { Info } from '@repo/ui/info'

const Shell = ({ children }: { children: React.ReactNode }) => <div className={styles.featuresTab}>{children}</div>

export const Features = () => {
  const { isSuccess, isPending, error, data } = reactQueryClient.useQuery('get', '/features')

  if (isPending) {
    return (
      <Shell>
        <Skeleton className={styles.skeleton} />
      </Shell>
    )
  }

  if (isSuccess && !data.features?.length) {
    return (
      <Shell>
        <Info variant="info" message="No features found" />
      </Shell>
    )
  }

  if (error) {
    return (
      <Shell>
        <Info variant="error" message={`An error has occurred: ${error}`} />
      </Shell>
    )
  }

  return (
    <Shell>
      <ul>
        {data?.features?.map(({ id, name, description, status }) => {
          return <FeatureCard key={id} id={id} title={name} description={description} status={status} />
        })}
      </ul>
    </Shell>
  )
}
