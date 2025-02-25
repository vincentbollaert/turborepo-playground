'use client'

import { reactQueryClient } from '@repo/api/apiClient'
import { Feature } from '@repo/ui/feature'
import { Skeleton } from '@repo/ui/skeleton'
import { Info } from '@repo/ui/info'
import styles from './home.module.scss'

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
          return <Feature key={id} id={id} title={name} description={description} status={status} />
        })}
      </ul>
    </Shell>
  )
}
