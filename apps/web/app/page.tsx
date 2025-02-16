import Image from 'next/image'
import { prisma } from '@repo/database'
import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/avatar'
import { ProfileCard } from '@repo/ui/profileCard'

export default async function IndexPage() {
  const users = await prisma.user.findMany()
  return (
    <main>
      <pre>{JSON.stringify(users, null, 2)}</pre>

      <div className="app">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ProfileCard />
      </div>
    </main>
  )
}
