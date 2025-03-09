import { StoryWrapper } from "@/internal/story/story";
import { StoryDefault } from "@ladle/react";
import { Socials as DSSocials } from "./socials";

export default {
  title: "Patterns",
} satisfies StoryDefault;

export const Socials = () => (
  <StoryWrapper>
    <DSSocials />
  </StoryWrapper>
);
