import { client } from "@repo/api/apiClient";
import { reactQueryClient } from "@repo/api/reactQueryClient";
import "@repo/ui/global.scss";
import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { getEnv } from "./env";
import { Layout } from "./layout";

client.setConfig({
  baseUrl: getEnv().VITE_DATABASE_URL,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={reactQueryClient}>
      <Layout />
    </QueryClientProvider>
  </StrictMode>,
);
