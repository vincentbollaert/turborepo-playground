import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/avatar'
import { ProfileCard } from '@repo/ui/profileCard'
import '@repo/ui/index.css'
import './App.css'

function App() {
  return (
    <div className="app">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <ProfileCard />
    </div>
  )
}

export default App
