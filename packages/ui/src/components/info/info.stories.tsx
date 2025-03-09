import { StoryWrapper } from "@/internal/story/story";
import type { Story, StoryDefault } from "@ladle/react";
import { Info, InfoProps } from "./info";

export default {
  title: "Components",
} satisfies StoryDefault<InfoProps>;

export const InfoInfo: Story<InfoProps> = (props) => (
  <StoryWrapper>
    <Info {...props}></Info>
  </StoryWrapper>
);
InfoInfo.args = {
  message: "info message",
  variant: "info",
};

export const InfoError: Story<InfoProps> = (props) => (
  <StoryWrapper>
    <Info {...props}></Info>
  </StoryWrapper>
);
InfoError.args = {
  message: "error message",
  variant: "error",
};
