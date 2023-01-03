# Email Obfuscator Webcomponent

Web component wrapper for [Email Obfuscator](https://creativetechguy.com/utilities/emailobfuscator).

## Features

- No External Deps & Lightweight (~ 1kB gzipped) ✨
- Web Component = Can be used with any JS library that works with HTML 🥳
- Obfuscated using JS/Canvas (Scrape bots no likey JS 🫠)
- Customisable with Slots [(soon! see todos)](#todo) 🛠️
- Written in Typescript 💪

## Installation & Usage

```sh
# npm
npm install email-obfuscator-webcomponent
# yarn
yarn add email-obfuscator-webcomponent
```

1. Generate the Encoded image [here](https://creativetechguy.com/utilities/emailobfuscator) and save the image into your public/assets directory

2. In your html/Component template add the webcomponent with the encoded image source.

```html
<obfuscated-email-address src="./encoded-image.png"></obfuscated-email-address>
```

For some frameworks like [Vue](https://vuejs.org/guide/extras/web-components.html#example-vite-config) for example, you might need to configure the bundler so it plays well with web components.

## TODO

- [] Expose slots to customise link
- [] Export webcomponent types
- [] Tests

## Credits
Decoder code is basically a slightly modified / Typescriptified version of [Email Obfuscator](https://creativetechguy.com/utilities/emailobfuscator) by Jason O'Neill