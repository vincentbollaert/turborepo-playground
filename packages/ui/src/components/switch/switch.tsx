import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as React from "react";

import clsx from "clsx";
import { computeDrawnBorderClass } from "../../styles/utils";
import styles from "./switch.module.scss";

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root>;
function Switch({ className, ...props }: SwitchProps) {
  // NOTE: Performing an api request or updating local storage is out of scope
  const [isChecked, setIsChecked] = React.useState(!!props.checked);

  return (
    <SwitchPrimitive.Root
      {...props}
      data-slot="switch"
      className={clsx(styles.root, computeDrawnBorderClass(), className)}
      onCheckedChange={() => {
        setIsChecked((currentState) => !currentState);
      }}
      checked={isChecked}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={clsx(styles.thumb, computeDrawnBorderClass())}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
