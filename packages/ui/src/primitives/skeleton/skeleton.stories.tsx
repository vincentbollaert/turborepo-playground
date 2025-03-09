import { StoryWrapper } from "@/internal/story/story";
import { StoryDefault } from "@ladle/react";
import { Skeleton as DSSkeleton } from "./skeleton";

export default {
  title: "Primitives",
} satisfies StoryDefault;

export const Skeleton = () => (
  <StoryWrapper>
    <DSSkeleton />
  </StoryWrapper>
);
