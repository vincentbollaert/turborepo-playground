import { cn } from '../../lib/utils'
import styles from './skeleton.module.scss'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="skeleton" className={cn(styles.skeleton, className)} {...props} />
}

export { Skeleton }
