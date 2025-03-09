import { globSync } from "glob";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: globSync("src/**/*.{tsx,ts,js,css,scss}"),
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  external: ["react"],
  treeshake: true,
  sourcemap: true,
  outDir: "dist",
  onSuccess: "bun run check-types",
});
