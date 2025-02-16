import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/avatar'
import { ProfileCard } from '@repo/ui/profileCard'
import '@repo/ui/styles/index.css'
import './App.css'

function App() {
  return (
    <div className="app">
      <Avatar className='large-avatar'>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <ProfileCard />
    </div>
  )
}

export default App
