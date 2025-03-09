import clsx from "clsx";
import styles from "./info.module.scss";

export type InfoProps = {
  variant: "info" | "error";
  message: string;
};

export const Info = ({ message, variant }: InfoProps) => {
  return (
    <div
      className={clsx(styles.wrap, {
        [styles.infoVariant]: variant === "info",
        [styles.errorVariant]: variant === "error",
      })}
    >
      {message}
    </div>
  );
};
