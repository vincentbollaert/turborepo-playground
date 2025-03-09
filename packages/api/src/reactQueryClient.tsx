import { QueryClient } from "@tanstack/react-query";

export const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
