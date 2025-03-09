import { Button } from "../../components/button/button";
import styles from "./navigation.module.scss";

export type NavigationProps<NavItem> = {
  navItems: {
    title: NavItem;
  }[];
  activeNavTitle: string;
  onClick: (title: NavItem) => void;
};
export const Navigation = <NavItem extends string>({
  navItems,
  activeNavTitle,
  onClick,
}: NavigationProps<NavItem>) => {
  return (
    <ul className={styles.navigation}>
      {navItems.map(({ title }, index) => (
        <li key={index}>
          <Button
            variant="link"
            size="large"
            className={styles.navItem}
            onClick={() => onClick(title)}
            data-active={activeNavTitle === title}
          >
            {title}
          </Button>
        </li>
      ))}
    </ul>
  );
};
