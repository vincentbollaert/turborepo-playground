import { StoryWrapper } from "@/internal/story/story";
import { Story, StoryDefault } from "@ladle/react";
import { Navigation as DSNavigation, NavigationProps } from "./navigation";

export default {
  title: "Patterns",
} satisfies StoryDefault<NavigationProps<"item1" | "item2">>;

export const Navigation: Story<NavigationProps<"item1" | "item2">> = (props) => (
  <StoryWrapper>
    <DSNavigation {...props} />
  </StoryWrapper>
);
Navigation.args = {
  activeNavTitle: "item1",
  navItems: [{ title: "item1" }, { title: "item2" }],
};
