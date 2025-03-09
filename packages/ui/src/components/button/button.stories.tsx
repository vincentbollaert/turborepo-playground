import { StoryWrapper } from "@/internal/story/story";
import type { Story, StoryDefault } from "@ladle/react";
import { ChevronDown } from "lucide-react";
import { Button, ButtonProps } from "./button";

export default {
  title: "Components",
} satisfies StoryDefault<ButtonProps>;

export const ButtonDefault: Story<ButtonProps> = ({ variant }) => (
  <StoryWrapper isDark>
    <Button variant={variant}>Default button</Button>
  </StoryWrapper>
);

export const ButtonLink: Story<ButtonProps> = ({ variant }) => (
  <StoryWrapper>
    <Button variant={variant}>Link button</Button>
  </StoryWrapper>
);
ButtonLink.args = {
  variant: "link",
};

export const ButtonLinkLarge: Story<ButtonProps> = ({ variant, size }) => (
  <StoryWrapper>
    <Button variant={variant} size={size}>
      Large link button
    </Button>
  </StoryWrapper>
);
ButtonLinkLarge.args = {
  variant: "link",
  size: "large",
};

export const ButtonGhostIcon: Story<ButtonProps> = ({ variant, size }) => (
  <StoryWrapper isDark>
    <Button variant={variant} size={size}>
      <ChevronDown />
    </Button>
  </StoryWrapper>
);
ButtonGhostIcon.args = {
  variant: "ghost",
  size: "icon",
};

export const ButtonDefaultIcon: Story<ButtonProps> = ({ variant, size }) => (
  <StoryWrapper isDark>
    <Button variant={variant} size={size}>
      <ChevronDown />
    </Button>
  </StoryWrapper>
);
ButtonDefaultIcon.args = {
  size: "icon",
};
