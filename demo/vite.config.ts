import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  root: "demo",
  optimizeDeps: {
    exclude: ["email-obfuscator-webcomponent"] // Don't consider this as part of demo source code
  },
  plugins: [
    react(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag.includes("-")
        }
      }
    })
  ],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        vue: resolve(__dirname, "vue/index.html"),
        react: resolve(__dirname, "react/index.html")
      }
    }
  }
});
