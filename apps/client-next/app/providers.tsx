"use client";

import { client } from "@repo/api/apiClient";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

import { getClientEnv } from "./env";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

client.setConfig({
  baseUrl: getClientEnv().NEXT_PUBLIC_API_URL,
});

export function Providers({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
