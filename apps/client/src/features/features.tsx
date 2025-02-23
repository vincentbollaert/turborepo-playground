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
    return <Info variant="error" message={`An error has occurred: ${error}`} />
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
          <h2>Monorepos are cool</h2>
          <p>
            Project setup takes longer, but this is weighed against the proper separation of concerns that monorepos
            enforce, as well as build time performance gains something like Turborepo offers
          </p>
          <h2>Tailwind doesn’t scale</h2>
          <p>
            I was against Tailwind from the start, without having ever tried it. During this project, I gave it an
            honest go, with the help of Shadcn and v0 for AI gen. It gets you ‘somewhere’ a lot quicker, but what you’re
            left with is markup that makes no sense and cannot be debugged easily via dev tools.
          </p>
          <p>
            Utility classes are a useful addition when used for utility purposes — (spacing, theming, etc.). But when
            used to style everything, they severly impact your ability to productively maintain and scale your frontend
            codebase.
          </p>
          <p>What I’ve found works great, is to</p>
          <ul>
            <li>
              create your own theme variables with the help of OpenProps (colors, shadows, animations, fonts, etc)
            </li>
            <li>with Radix primitives</li>
            <li>with PostCSS to turn these variables into classes for one-offs, and strip unused styles</li>
            <li>with CSS Modules for namespacing</li>
          </ul>
          <p>
            Radix lets you copy code examples with CSS Modules styles, which gives a good starting off point. The
            benefit is that you’re able to more effectively wrangle those styles into what you want.
          </p>
          <h2>Configuring modern ESlint and TS is still a PITA</h2>
          <h2>Packages should not be compiled unless you're planning to host them</h2>
        </div>
      )}
    </>
  )
}
