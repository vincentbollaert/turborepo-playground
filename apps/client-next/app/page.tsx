"use client";

import { Frame } from "@repo/ui/frame";
import { useMswInit } from "@repo/ui/hooks";
import { MockSelector } from "@repo/ui/mockSelector";
import { Socials } from "@repo/ui/socials";
import { Home } from "./home";

export default function IndexPage() {
  const mswStatus = useMswInit();

  if (mswStatus === "initializing") {
    return null;
  }

  return (
    <Frame>
      <Frame.Main>
        <Home />
      </Frame.Main>

      <Frame.Aside>
        <Frame.Aside.Block>
          <MockSelector />
        </Frame.Aside.Block>

        <Frame.Aside.Block>
          <Socials />
        </Frame.Aside.Block>
      </Frame.Aside>
    </Frame>
  );
}
