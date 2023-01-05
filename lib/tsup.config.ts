import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.ts"],
  outDir: "./dist",
  minify: true,
  clean: true,
  target: "es2015",
  format: ["esm"],
  dts: true,
});