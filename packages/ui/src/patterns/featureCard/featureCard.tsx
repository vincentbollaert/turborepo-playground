import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../components/button'
import { Switch } from '../../components/switch'
import { cn } from '../../lib/utils'

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
      className={cn('feature', {
        isExpanded,
      })}
      onClick={() => setIsExpanded(expandedState => !expandedState)}
    >
      <div className="feature__header">
        <div className="feature__switch-wrapper">
          <Switch
            id={`${id}-switch`}
            checked={title === 'Modern frontend applications'}
            onCheckedChange={() => {
              console.log('change')
            }}
            onClick={event => {
              event.stopPropagation()
            }}
          />
        </div>
        <h2 className="feature__title">{title}</h2>
        <Button variant="ghost" size="icon" className="feature__expand-button">
          {isExpanded ? (
            <ChevronUp className="feature__icon feature__icon--up" />
          ) : (
            <ChevronDown className="feature__icon feature__icon--down" />
          )}
        </Button>
      </div>
      <div className={`feature__description ${isExpanded ? 'feature__description--expanded' : ''}`}>
        <p className="feature__description-text">{description}</p>
      </div>
    </li>
  )
}
