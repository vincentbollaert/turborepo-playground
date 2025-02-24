import type { StoryDefault, Story } from '@ladle/react'

type Props = { label: string }

export default {
  title: 'New title',
} satisfies StoryDefault<Props>

export const Card: Story<Props> = ({ label }) => <p>Label: {label}</p>
Card.args = {
  label: 'Hello',
}
