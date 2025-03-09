import { StoryWrapper } from "@/internal/story/story";
import { StoryDefault } from "@ladle/react";
import { Frame as DSFrame } from "./frame";

export default {
  title: "Templates",
} satisfies StoryDefault;

export const Frame = () => (
  <StoryWrapper>
    <DSFrame>
      <DSFrame.Main>Frame main</DSFrame.Main>
      <DSFrame.Aside>
        <DSFrame.Aside.Block>Frame aside block</DSFrame.Aside.Block>
        <DSFrame.Aside.Block>Frame aside block</DSFrame.Aside.Block>
      </DSFrame.Aside>
    </DSFrame>
  </StoryWrapper>
);
