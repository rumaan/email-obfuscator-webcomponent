import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.ts"],
  outDir: "./dist",
  minify: true,
  clean: true,
  target: "esnext",
  format: ["esm", "cjs", "iife"],
  dts: true
});