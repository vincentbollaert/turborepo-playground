import { StoryWrapper } from "@/internal/story/story";
import type { Story, StoryDefault } from "@ladle/react";
import { Select as DSSelect, SelectItem, SelectProps } from "./select";

export default {
  title: "Components",
} satisfies StoryDefault<SelectProps>;

const options = [
  { label: "label1", value: "value1" },
  { label: "label2", value: "value2" },
];
export const Select: Story<SelectProps> = () => (
  <StoryWrapper>
    <DSSelect>
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </DSSelect>
  </StoryWrapper>
);
