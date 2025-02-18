import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/avatar'
import { FeatureCard } from '@repo/ui/featureCard'

export default async function IndexPage() {
  return (
    <main>
      <div className="app">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <FeatureCard title="test" description="test desc" status="done" />
      </div>
    </main>
  )
}
