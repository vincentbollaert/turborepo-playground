import react from "@vitejs/plugin-react-swc";
import type { UserConfig } from "vite";
import { defineConfig, mergeConfig } from "vitest/config";

export const baseViteConfig = defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [], // override this in consumer
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/**/*.{ts,tsx}"],
    },
  },
});

export function mergeViteConfig(config: UserConfig) {
  return mergeConfig(baseViteConfig, config);
}
