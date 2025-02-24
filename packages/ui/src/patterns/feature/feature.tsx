import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../components/button/button'
import { Switch } from '../../components/switch/switch'
import { cn, computeDrawnBorderClass, computeChaosShadowsClass } from '../../lib/utils'
import styles from './Feature.module.scss'

export type FeatureProps = {
  id: string
  title: string
  status: string
  description: string
}

export const Feature = ({ id, title, description, status }: FeatureProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <li
      className={cn(styles.feature, computeDrawnBorderClass(), computeChaosShadowsClass())}
      onClick={() => setIsExpanded(expandedState => !expandedState)}
      data-expanded={isExpanded}
    >
      <div className={styles.header}>
        <div className={styles.switchWrapper}>
          <Switch
            id={`${id}-switch`}
            className={styles.switch}
            checked={status === 'done'}
            onClick={event => {
              event.stopPropagation()
            }}
          />
        </div>
        <h2 className={styles.title}>{title}</h2>
        <Button variant="ghost" size="icon" className={styles.expandButton}>
          {isExpanded ? <ChevronUp className={styles.icon} /> : <ChevronDown className={styles.icon} />}
        </Button>
      </div>
      <div className={styles.description}>
        <p className={styles.descriptionText}>{description}</p>
      </div>
    </li>
  )
}
