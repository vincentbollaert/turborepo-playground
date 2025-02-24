import { cn } from '../../lib/utils'
import styles from './skeleton.module.scss'

export const Skeleton = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div data-slot="skeleton" className={cn(styles.skeleton, className)} {...props} />
}
