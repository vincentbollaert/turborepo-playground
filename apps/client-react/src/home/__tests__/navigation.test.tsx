import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { renderApp } from "../../testSetup/testUtils.local";

describe("<Navigation />", () => {
  beforeEach(() => {
    renderApp();
  });

  it("should render the nav", async () => {
    expect(screen.getByRole("button", { name: "features" })).toHaveAttribute("data-active", "true");
    expect(screen.getByRole("button", { name: "learnings" })).toBeInTheDocument();
  });

  it("should navigate on nav click", async () => {
    userEvent.click(screen.getByRole("button", { name: "learnings" }));
    await expect(screen.findByTestId("learnings")).resolves.toBeInTheDocument();
  });
});
