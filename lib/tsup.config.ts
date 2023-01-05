import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.ts"],
  outDir: "./dist",
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
  minify: true,
  clean: true,
  target: "ESNext",
  format: ["esm"],
  dts: true,
});