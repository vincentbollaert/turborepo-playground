import { StoryWrapper } from "@/internal/story/story";
import type { Story, StoryDefault } from "@ladle/react";
import { Feature, FeatureProps } from "./feature";

export default {
  title: "Patterns",
} satisfies StoryDefault<FeatureProps>;

export const FeatureInactive: Story<FeatureProps> = (props) => (
  <StoryWrapper>
    <Feature {...props}></Feature>
  </StoryWrapper>
);
FeatureInactive.args = {
  title: "inactive feature",
  description: "feature description",
};

export const FeatureActive: Story<FeatureProps> = (props) => (
  <StoryWrapper>
    <Feature {...props}></Feature>
  </StoryWrapper>
);
FeatureActive.args = {
  title: "active feature title",
  description: "feature description",
  status: "done",
};
