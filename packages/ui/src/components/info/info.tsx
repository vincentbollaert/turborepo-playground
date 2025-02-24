import styles from './info.module.scss'
import { cn } from '../../lib/utils'

export type InfoProps = {
  variant: 'info' | 'error'
  message: string
}

export const Info = ({ message, variant }: InfoProps) => {
  return (
    <div
      className={cn(styles.wrap, {
        [styles.infoVariant]: variant === 'info',
        [styles.errorVariant]: variant === 'error',
      })}
    >
      {message}
    </div>
  )
}
