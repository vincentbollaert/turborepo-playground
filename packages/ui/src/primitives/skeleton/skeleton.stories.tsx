import { StoryDefault } from '@ladle/react'
import { Skeleton as DSSkeleton } from './skeleton'
import { StoryWrapper } from '@/internal/story/story'

export default {
  title: 'Primitives',
} satisfies StoryDefault

export const Skeleton = () => (
  <StoryWrapper>
    <DSSkeleton />
  </StoryWrapper>
)
