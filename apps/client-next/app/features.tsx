"use client";

import { getFeaturesOptions } from "@repo/api/reactQueries";
import { Feature } from "@repo/ui/feature";
import { Info } from "@repo/ui/info";
import { Skeleton } from "@repo/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import styles from "./home.module.scss";

const Shell = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.featuresTab}>{children}</div>
);

export const Features = () => {
  const { isSuccess, isPending, error, data } = useQuery(getFeaturesOptions());

  if (isPending) {
    return (
      <Shell>
        {Array(7)
          .fill("")
          .map((_, index) => (
            <div className={styles.row} key={index}>
              <Skeleton className={styles.skeletonCircle} />
              <Skeleton />
            </div>
          ))}
      </Shell>
    );
  }

  if (isSuccess && !data.features?.length) {
    return (
      <Shell>
        <Info variant="info" message="No features found" />
      </Shell>
    );
  }

  if (error) {
    return (
      <Shell>
        <Info variant="error" message={`An error has occurred: ${error}`} />
      </Shell>
    );
  }

  return (
    <Shell>
      <ul>
        {data?.features?.map(({ id, name, description, status }) => {
          return (
            <Feature key={id} id={id} title={name} description={description} status={status} />
          );
        })}
      </ul>
    </Shell>
  );
};
