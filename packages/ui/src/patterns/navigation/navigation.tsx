import { cn } from '../../lib/utils'
import { Button } from '../../components/button'
import styles from './navigation.module.scss'

export type NavigationProps = {
  navItems: {
    title: string
  }[]
  activeNavTitle: string
  onClick: (title: string) => void
}
export const Navigation = ({ navItems, activeNavTitle, onClick }: NavigationProps) => {
  return (
    <ul className={styles.navigation}>
      {navItems.map(({ title }, index) => (
        <li key={index}>
          <Button
            variant="link"
            size="large"
            className={cn({ [styles.isActive]: activeNavTitle === title })}
            onClick={() => onClick(title)}
          >
            {title}
          </Button>
        </li>
      ))}
    </ul>
  )
}
