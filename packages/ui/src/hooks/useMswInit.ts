import { useEffect, useState } from "react";

// TODO: this file needs a refactor
// I also don't think that the UI package should know of the api package

export function useMswInit() {
  const [status, setStatus] = useState<"initializing" | "ready">(() =>
    process.env.NODE_ENV === "development" ? "initializing" : "ready",
  );

  useEffect(() => {
    const enableMocking = async () => {
      if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
        const { browserWorker } = await import("@repo/api-mocks/browserWorker");
        await browserWorker.start({ onUnhandledRequest: "bypass" });
        setStatus("ready");
      }
    };

    enableMocking();
  }, []);

  return status;
}
