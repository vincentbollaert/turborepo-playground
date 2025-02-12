import { prisma } from '@repo/database'
import { Card } from '@repo/ui/Card'

export default async function IndexPage() {
  const users = await prisma.user.findMany()

  return (
    <div>
      <h1>Hello World 2</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      <Card title="test title" href="">
        Test description
      </Card>
    </div>
  )
}
