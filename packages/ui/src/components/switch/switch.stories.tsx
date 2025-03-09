import { StoryWrapper } from "@/internal/story/story";
import { StoryDefault } from "@ladle/react";
import { Switch as DSSwitch } from "./switch";

export default {
  title: "Components",
} satisfies StoryDefault;

export const Switch = () => (
  <StoryWrapper>
    <DSSwitch id="switch" />
  </StoryWrapper>
);
