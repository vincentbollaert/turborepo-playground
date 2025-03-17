"use client";

import { Frame } from "@repo/ui/frame";
import { useMswInit } from "@repo/ui/hooks";
import { MockSelector } from "@repo/ui/mockSelector";
import { Socials } from "@repo/ui/socials";
import clsx from "clsx";
import { Home } from "./home";

import dynamic from "next/dynamic";
import { getClientEnv } from "./env";

const AppSwitcher = dynamic(() => import("@repo/ui/appSwitcher").then((mod) => mod.AppSwitcher), {
  ssr: false,
});

export default function IndexPage() {
  const mswStatus = useMswInit();
  if (mswStatus === "initializing") {
    return null;
  }

  return (
    <Frame>
      <Frame.Main>
        <AppSwitcher />
        <Home />
      </Frame.Main>

      <Frame.Aside>
        <Frame.Aside.Block className={clsx({ isHidden: getClientEnv().NODE_ENV === "production" })}>
          <MockSelector />
        </Frame.Aside.Block>

        <Frame.Aside.Block>
          <Socials />
        </Frame.Aside.Block>
      </Frame.Aside>
    </Frame>
  );
}
