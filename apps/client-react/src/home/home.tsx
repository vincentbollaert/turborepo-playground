import type { Tab } from "../types";
import { Features } from "./features";
import { Learnings } from "./learnings";

export const Home = ({ activeTab }: { activeTab: Tab }) => {
  return activeTab === "features" ? <Features /> : <Learnings />;
};
