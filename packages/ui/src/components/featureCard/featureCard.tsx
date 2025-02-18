export type FeatureCardProps = {
  title: string
  status: string
  description: string
}
export const FeatureCard = ({ title, status, description }: FeatureCardProps) => {
  return (
    <div className="feature-card">
      <div className="feature-card__content">
        <div className="feature-card__header">
          <h2 className="feature-card__title">{title}</h2>
          <p className="feature-card__description">{status}</p>
        </div>
        <div className="feature-card__body">
          <p className="feature-card__text">{description}</p>
        </div>
      </div>
    </div>
  )
}
