import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/button/button";
import { Switch } from "../../components/switch/switch";
import { computeChaosShadowsClass, computeDrawnBorderClass } from "../../styles/utils";
import styles from "./feature.module.scss";

export type FeatureProps = {
  id: string;
  title: string;
  status: string;
  description: string;
};

export const Feature = ({ id, title, description, status }: FeatureProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li
      className={clsx(styles.feature, computeDrawnBorderClass(), computeChaosShadowsClass())}
      onClick={() => setIsExpanded((expandedState) => !expandedState)}
      data-expanded={isExpanded}
      data-testid="feature"
    >
      <div className={styles.header}>
        <div className={styles.switchWrapper}>
          <Switch
            id={`${id}-switch`}
            className={styles.switch}
            checked={status === "done"}
            onClick={(event) => {
              event.stopPropagation();
            }}
          />
        </div>
        <h2 className={styles.title}>{title}</h2>
        <Button
          variant="ghost"
          size="icon"
          className={styles.expandButton}
          data-testid="expand-btn"
        >
          {isExpanded ? (
            <ChevronUp className={styles.icon} />
          ) : (
            <ChevronDown className={styles.icon} />
          )}
        </Button>
      </div>
      <div className={styles.description}>
        <p className={styles.descriptionText}>{description}</p>
      </div>
    </li>
  );
};
