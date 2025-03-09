import clsx from "clsx";
import styles from "./skeleton.module.scss";

export const Skeleton = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="skeleton"
      className={clsx(styles.skeleton, className)}
      {...props}
      data-testid="skeleton"
    />
  );
};
