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
          <Button variant="link" size="large" onClick={() => onClick(title)} data-active={activeNavTitle === title}>
            {title}
          </Button>
        </li>
      ))}
    </ul>
  )
}
