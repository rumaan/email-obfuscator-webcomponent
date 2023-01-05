import { createApp } from "vue";
import App from "./App.vue";

import EmailAddress from "email-obfuscator-webcomponent";
customElements.define("email-address", EmailAddress);

const app = createApp(App);
app.mount("#app");