import { ReactNode } from "react";
import styles from "./frame.module.scss";

// NOTE: super rough slots implementation
export const Frame = ({ children }: { children: ReactNode }) => {
  return <div className={styles.frameWrap}>{children}</div>;
};

const FrameMain = ({ children }: { children: ReactNode }) => {
  return <main className={styles.layout}>{children}</main>;
};

const FrameAside = ({ children }: { children: ReactNode }) => {
  return <aside className={styles.aside}>{children}</aside>;
};

const FrameAsideBlock = ({ children }: { children: ReactNode }) => {
  return <aside className={styles.asideBlock}>{children}</aside>;
};

Frame.Main = FrameMain;
Frame.Aside = FrameAside;
Frame.Aside.Block = FrameAsideBlock;
FrameAside.Block = FrameAsideBlock;
