import { ReactNode } from 'react'
import styles from './frame.module.scss'

export const Frame = ({ children }: { children: ReactNode }) => {
  return <main className={styles.layout}>{children}</main>
}
