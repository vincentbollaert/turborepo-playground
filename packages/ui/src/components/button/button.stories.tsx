import type { StoryDefault, Story } from '@ladle/react'
import { Button, ButtonProps } from './button'
import { StoryWrapper } from '@/internal/story/story'
import { ChevronDown } from 'lucide-react'

export default {
  title: 'Button',
} satisfies StoryDefault<ButtonProps>

export const DefaultButton: Story<ButtonProps> = ({ variant }) => (
  <StoryWrapper isDark>
    <Button variant={variant}>Default button</Button>
  </StoryWrapper>
)

export const LinkButton: Story<ButtonProps> = ({ variant }) => (
  <StoryWrapper>
    <Button variant={variant}>Link button</Button>
  </StoryWrapper>
)
LinkButton.args = {
  variant: 'link',
}

export const LinkLargeButton: Story<ButtonProps> = ({ variant, size }) => (
  <StoryWrapper>
    <Button variant={variant} size={size}>
      Large link button
    </Button>
  </StoryWrapper>
)
LinkLargeButton.args = {
  variant: 'link',
  size: 'large',
}

export const GhostIconButton: Story<ButtonProps> = ({ variant, size }) => (
  <StoryWrapper isDark>
    <Button variant={variant} size={size}>
      <ChevronDown />
    </Button>
  </StoryWrapper>
)
GhostIconButton.args = {
  variant: 'ghost',
  size: 'icon',
}

export const DefaultIconButton: Story<ButtonProps> = ({ variant, size }) => (
  <StoryWrapper isDark>
    <Button variant={variant} size={size}>
      <ChevronDown />
    </Button>
  </StoryWrapper>
)
DefaultIconButton.args = {
  size: 'icon',
}
