import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../components/button'
import { Switch } from '../../components/switch'
import { cn, computeDrawnBorderClass, computeChaosShadowsClass } from '../../lib/utils'
import styles from './featureCard.module.scss'

export type FeatureCardProps = {
  id: string
  title: string
  status: string
  description: string
}

export const FeatureCard = ({ id, title, description }: FeatureCardProps) => {
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
            checked={title === 'Modern frontend applications'}
            className={styles.switch}
            onCheckedChange={() => {
              console.log('change')
            }}
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
