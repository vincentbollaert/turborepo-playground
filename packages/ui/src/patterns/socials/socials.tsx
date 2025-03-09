import { CircleUserRound, CodeXml } from "lucide-react";
import { Button } from "../../components/button/button";
import styles from "./socials.module.scss";

// NOTE: component should be more dumb
export const Socials = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <CodeXml />,
      url: "https://github.com/vincentbollaert",
      isDisabled: false,
    },
    {
      name: "Blog - under development",
      icon: <CircleUserRound />,
      url: "vincentcodes.dev",
      isDisabled: true,
    },
  ];

  return (
    <ul className={styles.socials}>
      {socialLinks.map(({ name, url, icon, isDisabled }) => {
        return (
          <li key={name}>
            <Button
              size="icon"
              className={styles.btn}
              disabled={isDisabled}
              title={name}
              onClick={() => {
                window.open(url, "_blank");
              }}
            >
              {icon}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
