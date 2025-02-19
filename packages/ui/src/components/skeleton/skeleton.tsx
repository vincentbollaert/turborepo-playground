import { cn } from '../../lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="skeleton" className={cn('bg-secondary/10 animate-pulse rounded-md m-4', className)} {...props} />
  )
}

export { Skeleton }
