import { defineConfig } from "vite";
import { mergeViteConfig } from "@repo/vitest-config/configs";
export default defineConfig(() => mergeViteConfig({
    test: {
        setupFiles: ["./setupTests.ts"],
    },
}));
