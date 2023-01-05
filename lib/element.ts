import { decodeImage } from "./decoder";

export class ObfuscatedEmailAddress extends HTMLElement {
  src: string = "";
  #id: string = Math.random().toString().substring(2);

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this.template;
  }

  get styles() {
    return `
      :host {
        display: inline-block;
      }
      .hidden {
        display: none;
      }
    `;
  }

  get template() {
    return `
      <style>
        ${this.styles}
      </style>
      <div id="wrapper-${this.#id}" class="wrapper">
        <div class="loading">
          <slot name="loading">Loading...</slot>
        </div>
        <img id="img-${this.#id}" class="hidden" crossorigin="anonymous">
        <canvas id="canvas-${this.#id}" class="hidden"></canvas>
      </div>
    `.trim();
  }

  static get observedAttributes() {
    return ["src"];
  }

  connectedCallback() {
    this.init();
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    currentValue: string | null
  ) {
    if (name === "src") {
      this.src = currentValue ?? "";
    }
  }

  init() {
    if (this.shadowRoot?.isConnected && this.src) {
      const wrapper = this.shadowRoot.getElementById(
        `wrapper-${this.#id}`
      ) as HTMLDivElement;

      const img = this.shadowRoot.getElementById(
        `img-${this.#id}`
      ) as HTMLImageElement;

      img.src = this.src;

      const canvas = this.shadowRoot.getElementById(
        `canvas-${this.#id}`
      ) as HTMLCanvasElement;

      if (img.complete && img.naturalHeight !== 0) {
        this.decodeImageAndUpdateDOM({
          img,
          canvas,
          wrapper,
        });
      } else {
        img.onload = () => {
          this.decodeImageAndUpdateDOM({
            img,
            canvas,
            wrapper,
          });
        };
      }
    }
  }

  async decodeImageAndUpdateDOM({
    canvas,
    img,
    wrapper,
  }: {
    canvas: HTMLCanvasElement;
    img: HTMLImageElement;
    wrapper: HTMLDivElement;
  }) {
    const link = await decodeImage(canvas, img);
    canvas.remove();
    img.remove();
    wrapper.innerHTML = link;
    const anchor = wrapper.firstElementChild!;
    anchor.setAttribute("part", "link");
    anchor.innerHTML = `<slot name="link">${anchor.textContent}</slot>`;
    wrapper!.replaceWith(anchor);
  }
}
