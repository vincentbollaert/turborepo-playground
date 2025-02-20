"use client"

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../button'
import { Switch } from '../switch'

export type FeatureCardProps = {
  id: string
  title: string
  status: string
  description: string
}
// export const FeatureCard = ({ title, status, description }: FeatureCardProps) => {
//   return (
//     <div className="feature-card">
//       <div className="feature-card__content">
//         <div className="feature-card__header">
//           <h2 className="feature-card__title text-xxsm">{title}</h2>
//           <p className="feature-card__description">{status}</p>
//         </div>
//         <div className="feature-card__body">
//           <p className="feature-card__text">{description}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

export const FeatureCard = ({ id, title, status, description }: FeatureCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <li className="feature">
      <div className="feature__header">
        <div className="feature__switch-wrapper">
          <Switch
            id={`${id}-switch`}
            checked={status === 'done'}
            onCheckedChange={() => {
              console.log('change')
            }}
          />
        </div>
        <h2 className="feature__title">{title}</h2>
        <Button
          variant="ghost"
          size="lg"
          className="feature__expand-button"
          onClick={() => setIsExpanded(expandedState => !expandedState)}
        >
          {isExpanded ? (
            <ChevronUp className="feature__icon feature__icon--up" />
          ) : (
            <ChevronDown className="feature__icon feature__icon--down" />
          )}
          <span className="sr-only">{isExpanded ? 'Hide' : 'Show'} Description</span>
        </Button>
      </div>
      <div className={`feature__description ${isExpanded ? 'feature__description--expanded' : ''}`}>
        <p className="feature__description-text">{description}</p>
      </div>
    </li>
  )
}
