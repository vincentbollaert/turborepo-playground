import { AppSwitcher } from "@repo/ui/appSwitcher";
import { Frame } from "@repo/ui/frame";
import { useMswInit } from "@repo/ui/hooks";
import { MockSelector } from "@repo/ui/mockSelector";
import { Navigation } from "@repo/ui/navigation";
import { Socials } from "@repo/ui/socials";
import clsx from "clsx";
import { useState } from "react";
import { getEnv } from "./env";
import { Home } from "./home/home";
import { Tab } from "./types";

export const Layout = () => {
  const [activeTab, setActiveTab] = useState<Tab>("features");

  const env = getEnv();
  const mswStatus = useMswInit();
  if (mswStatus === "initializing") {
    return null;
  }

  return (
    <Frame>
      <Frame.Main>
        <AppSwitcher />
        <Navigation<Tab>
          navItems={[{ title: "features" }, { title: "learnings" }]}
          activeNavTitle={activeTab}
          onClick={(selectedNavTitle) => setActiveTab(selectedNavTitle)}
        />
        <Home activeTab={activeTab} />
      </Frame.Main>

      <Frame.Aside>
        <Frame.Aside.Block className={clsx({ isHidden: env.MODE === "production" })}>
          <MockSelector />
        </Frame.Aside.Block>

        <Frame.Aside.Block>
          <Socials />
        </Frame.Aside.Block>
      </Frame.Aside>
    </Frame>
  );
};
