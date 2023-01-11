# Customisation

## Slots

The webcomponent exposes two [slots](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) for customising its behaviour:

### Custom Loading Slot

Default:

```html
<slot name="loading">Loading...</slot>
```

Customised loading state:

```html
<email-address src="/images/encoded-email-image.png">
  <span slot="loading">🕘</span>
</email-address>
```

Here's how it would look like:
<ClientOnly>
<email-address src="/vbvfro8215e.png">
<span slot="loading">🕘</span>
</email-address>
</ClientOnly>

### Custom Link Slot

By Default this slot shows the email address as text

```html
<slot name="link">email@example.com</slot>
```

This can be customised by providing a custom markup into the `link` named slot.

```html
<email-address src="/images/encoded-email-image.png">
  <span slot="link">Click Here</span>
</email-address>
```

Here's how it would look like:
<ClientOnly>
<email-address src="/vbvfro8215e.png">
<span slot="link">Click here</span>
</email-address>
</ClientOnly>

## Styling

The webcomponent can be styled directly using css selector for the defined webcomponent.

```html
<email-address src="/vbvfro8215e.png"> </email-address>
```

```css
email-address {
  display: block;
  position: relative;
}
```

The anchor link element can be styled using [`::part()`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) selector

```css
email-address::part(link) {
  display: inline-block;
  color: orange;
  text-decoration-style: dotted;
}
```

<style>
email-address.custom-link::part(link) {
  display: inline-block;
  color: orange;
  text-decoration-style: dotted;
  transition: all 275ms ease-in-out;
  text-underline-position: from-font;
}

email-address.custom-link::part(link):hover {
  background-color: rgba(255 165 0 / 0.1);
  text-decoration: none;
  border-radius: 4px;
  padding-inline: 6px;
}
</style>

Result:
<ClientOnly>
<email-address class="custom-link" src="/vbvfro8215e.png">
</email-address>
</ClientOnly>