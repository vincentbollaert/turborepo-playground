import { getFeaturesOptions } from '@repo/api/reactQueryClient'
import { Feature } from '@repo/ui/feature'
import { Skeleton } from '@repo/ui/skeleton'
import styles from './home.module.scss'
import { Info } from '@repo/ui/info'
import { useQuery } from '@tanstack/react-query'

const Shell = ({ children }: { children: React.ReactNode }) => <div className={styles.featuresTab}>{children}</div>

export const Features = () => {
  const { isSuccess, isPending, error, data } = useQuery(getFeaturesOptions())

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
          return <Feature key={id} id={id} title={name} description={description} status={status} />
        })}
      </ul>
    </Shell>
  )
}
