import { client } from "@repo/api/apiClient";
import { reactQueryClient } from "@repo/api/reactQueryClient";
import "@repo/ui/global.scss";
import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "./layout";

const mode = import.meta.env.MODE;
const devDbUrl = import.meta.env.VITE_LOCAL_DATABASE_URL;
const prodDbUrl = import.meta.env.VITE_PROD_DATABASE_URL;

client.setConfig({
  baseUrl: mode === "production" ? prodDbUrl : devDbUrl,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={reactQueryClient}>
      <Layout />
    </QueryClientProvider>
  </StrictMode>,
);
