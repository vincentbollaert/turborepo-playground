import { reactQueryClient } from '@repo/api/apiClient'
import { FeatureCard } from '@repo/ui/featureCard'
import { Skeleton } from '@repo/ui/skeleton'
import styles from './home.module.scss'
import { Info } from '@repo/ui/info'

export const Features = () => {
  const { isSuccess, isPending, error, data } = reactQueryClient.useQuery('get', '/features')

  if (isPending) {
    return <Skeleton className={styles.skeleton} />
  }

  if (isSuccess && !data.features?.length) {
    return <Info variant="info" message="No features found" />
  }

  if (error) {
    return <Info variant="error" message={`An error has occurred: ${error}`} />
  }

  return (
    <ul className={styles.features}>
      {data?.features?.map(({ id, name, description, status }) => {
        return <FeatureCard key={id} id={id} title={name} description={description} status={status} />
      })}
    </ul>
  )
}
