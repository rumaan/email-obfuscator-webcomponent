# Email Obfuscator Webcomponent

Web component wrapper for [Email Obfuscator](https://creativetechguy.com/utilities/emailobfuscator).

Demo: https://email-obfuscator-webcomponent-demo.vercel.app/

## Features

- ✨ No External Deps & Lightweight (~ 1kB gzipped)
- 👀 Web Component = Can be used with any JS library that works with HTML
- 🥳 Deobfuscated using JS/Canvas (Scrape bots no likey JS!)
- 🛠️ Customisable with Slots [(soon! see todos)](#todo)
- 💪 Written in Typescript

## Installation & Usage

```sh
# npm
npm install email-obfuscator-webcomponent
# yarn
yarn add email-obfuscator-webcomponent
```

or in browser end of `<body>` tag

```html
<script type="module">
  import EmailAddress from "https://cdn.skypack.dev/email-obfuscator-webcomponent";
  customElements.define("email-address", EmailAddress);
</script>
```

1. Generate the Encoded image [here](https://creativetechguy.com/utilities/emailobfuscator) and save the image into your public/assets directory

2. In your html/Component template add the webcomponent with the encoded image source.

```html
<email-address src="./encoded-image.png"></email-address>
```

For some frameworks like [Vue](https://vuejs.org/guide/extras/web-components.html#example-vite-config) for example, you might need to configure the bundler so it plays well with web components.

Framework Usages:

- [Vue](/demo/vue/) 
- [React](/demo/react/) 

## Customizable Slots

You can use `slot="loading"` to customize the loading state of the component.

```html
<email-address src="./encoded-image.png">
  <span slot="loading">...</span>
</email-address>
```

You can customize the anchor link using `::part()` pseudo-element selector to match the `link` part.

```css
email-address::part(link) {
  display: inline-block;
  color: green;
}
```

Or if you want to use a custom tag instead of the default anchor text you can use the `slot="link"` like so:

```html
<email-address src="https://rumaan.dev/jkvu1o0le24.png">
  <span slot="loading">...</span>
  <span slot="link"> This is a customised mailto link </span>
</email-address>
```

## TODOS

- [x] Expose [slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots) to customise link
- [x] Export webcomponent types
- [x] Tests
- [x] Readme with examples using in React, Vue etc.

## Credits

Decoder code is basically a slightly modified / Typescriptified version of [Email Obfuscator](https://creativetechguy.com/utilities/emailobfuscator) by Jason O'Neill
