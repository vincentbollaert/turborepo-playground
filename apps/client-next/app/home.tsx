"use client";

import { Navigation } from "@repo/ui/navigation";
import { useState } from "react";
import { Features } from "./features";
import { Learnings } from "./learnings";

type Tab = "features" | "learnings";

export const Home = () => {
  const [activeTab, setActiveTab] = useState<Tab>("features");

  const navItems = [{ title: "features" }, { title: "learnings" }];

  return (
    <div>
      <Navigation
        navItems={navItems}
        activeNavTitle={activeTab}
        onClick={(title) => setActiveTab(title as Tab)}
      />
      {activeTab === "features" ? <Features /> : <Learnings />}
    </div>
  );
};
