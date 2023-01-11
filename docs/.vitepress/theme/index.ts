import type { EnhanceAppContext } from "vitepress/dist/client";
import DefaultTheme from "vitepress/theme";

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
    if (typeof document !== "undefined") { // Fixes SSR for web components
      import("email-obfuscator-webcomponent").then((module) => {
        customElements.define("email-address", module.default);
      });
    }
  },
};
