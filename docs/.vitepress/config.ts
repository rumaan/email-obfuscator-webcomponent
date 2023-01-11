import { defineConfig } from "vitepress";

export default defineConfig({
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === "email-address",
      },
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["email-obfuscator-webcomponent"], // Don't consider this as part of demo source code
    },
  },
  title: "Email Obfuscator WC",
  description:
    "A Simple Web Component that Obfuscates Email address in HTML source.",
  lang: "en-US",
  lastUpdated: true,
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/rumaan/email-obfuscator-webcomponent",
      },
    ],
    nav: [
      {
        text: "Guide",
        link: "/guide/getting-started",
      },
      {
        text: "Email Obfuscator",
        link: "https://creativetechguy.com/utilities/emailobfuscator",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          {
            text: "How does it work?",
            link: "/guide/how-it-works",
          },
          {
            text: "Getting Started",
            link: "/guide/getting-started",
          },
          {
            text: "Customisation",
            link: "/guide/customisation",
          },
        ],
      },
      {
        text: "Usage and Demo",
        items: [
          {
            text: "Vue",
            link: "/demo/vue",
          },
          {
            text: "React",
            link: "/demo/react",
          },
        ],
      },
    ],
  },
});
