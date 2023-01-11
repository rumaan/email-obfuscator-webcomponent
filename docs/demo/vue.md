# Usage in Vue

For using this web-component in vue you'll need to configure your bundler so vue can resolve the custom element. If you're using Vue plugin for vite:

```ts
vue({
  template: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag === "email-address",
    },
  },
});
```

See: [Custom Element in Vue](https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue)

```ts {4,5}
import { createApp } from "vue";
import App from "./App.vue";

import EmailAddress from "email-obfuscator-webcomponent";
customElements.define("email-address", EmailAddress);

const app = createApp(App);
app.mount("#app");
```

```vue {8}
<script setup lang="ts">
import encodedImg from "../vbvfro8215e.png?url";
</script>

<template>
  <main>
    <h1>Hello from Vue!</h1>
    <email-address :src="encodedImg"></email-address>
  </main>
</template>
```

## Demo

<ClientOnly>
<email-address src="/vbvfro8215e.png"> </email-address>
</ClientOnly>

[Source](https://github.com/rumaan/email-obfuscator-webcomponent/tree/main/demo/vue)
