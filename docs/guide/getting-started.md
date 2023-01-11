# Getting Started

This webcomponent is basically a wrapper with some customisation for the original [Email Obfuscator](https://creativetechguy.com/utilities/emailobfuscator) by Jason O'Neill.

## Step 1: Generate Encoded image

Generate the encoded image file using [Email Obfuscator](https://creativetechguy.com/utilities/emailobfuscator) and save it your `public` or `assets` directory.

## Step 2: Installing Webcomponent

### HTML & Vanilla JS

Import the webcomponent using any CDNs that deliver packages from npm like [unpkg](https://unpkg.com/email-obfuscator-webcomponent@latest), [skypack](https://cdn.skypack.dev/email-obfuscator-webcomponent).

```html
<script type="module">
  import EmailAddress from "https://cdn.skypack.dev/email-obfuscator-webcomponent";
  customElements.define("email-address", EmailAddress);
</script>
```

### NPM/Yarn
If you want to install and use the webcomponent using package managers like npm/yarn:
```sh
npm install email-obfuscator-webcomponent
```
```sh
yarn add email-obfuscator-webcomponent
```
In your script file, import the component and define it:
```ts
import EmailAddress from 'email-obfuscator-webcomponent';
customElements.define("email-address", EmailAddress);
```

And use the component passing in the correct path to the encoded image:

```html
<!-- Anywhere in your HTML page -->
<email-address src="/images/encoded-email-image.png"></email-address>
```

::: warning NOTE
The webcomponent adds `crossorigin` attribute to the image request (`src`) to be [`anonymous`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin) so make sure CORS headers are set correctly to the image path if the encoded image is served from some cross-origin.