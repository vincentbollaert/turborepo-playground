import { Avatar, AvatarImage, AvatarFallback } from '../avatar/Avatar'

export const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-card__container">
        <div className="profile-card__avatar-wrapper">
          <div className="profile-card__avatar-container">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=300&width=300" alt="Profile picture" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="profile-card__content">
          <div className="profile-card__header">
            <h2 className="profile-card__title">Jane Doe</h2>
            <p className="profile-card__description">Frontend Developer</p>
          </div>
          <div className="profile-card__body">
            <p className="profile-card__text">
              Passionate about creating beautiful and functional web experiences. Always learning and exploring new
              technologies. With a keen eye for design and a love for clean code, I strive to build intuitive and
              responsive user interfaces that make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
