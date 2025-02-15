import { defineConfig } from "tsup";
import { globSync } from "glob";

export default defineConfig({
  entry: globSync("src/**/*"),
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  external: ["react"],
  treeshake: true,
  sourcemap: true,
  outDir: "dist",
  onSuccess: "bun run check-types",
});
