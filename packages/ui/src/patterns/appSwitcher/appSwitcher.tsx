import { Button } from "../../components/button/button";
import styles from "./appSwitcher.module.scss";

// TODO: should access local ports instead of hardcoding
// TODO: should access prod url from config
const apps = [
  {
    name: "react",
    urlDev: "http://localhost:5173/",
    urlProd: "https://turborepo-playground-client-react.vercel.app/",
  },
  {
    name: "nextjs",
    urlDev: "http://localhost:3000/",
    urlProd: "https://turborepo-playground-client-next.vercel.app/",
  },
];

export const AppSwitcher = () => (
  <div className={styles.wrap}>
    {apps.map(({ name, urlDev, urlProd }) => {
      const envUrl = process.env.NODE_ENV === "production" ? urlProd : urlDev;
      const isActive = envUrl.includes(location.href);

      return (
        <Button
          key={name}
          variant="ghost"
          data-active={isActive}
          className={styles.app}
          onClick={() => {
            window.location.href = envUrl;
          }}
        >
          {name}
        </Button>
      );
    })}
  </div>
);
