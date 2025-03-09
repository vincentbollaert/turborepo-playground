import React from "react";
import "../../styles/index.scss";

export const StoryWrapper = ({
  children,
  isDark,
}: {
  children: React.ReactNode;
  isDark?: boolean;
}) => {
  return (
    <div style={{ padding: "3rem", backgroundColor: isDark ? "#474747" : "#fff" }}>{children}</div>
  );
};
