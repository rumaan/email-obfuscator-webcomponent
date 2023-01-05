import { decodeImage } from "./decoder";

export class ObfuscatedEmailAddress extends HTMLElement {
  src: string = "";
  #id: string = Math.random().toString().substring(2);

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
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

  static get observedAttributes() {
    return ["src"];
  }

  connectedCallback() {
    const wrapper: HTMLDivElement = document.createElement("div");
    wrapper.id = `wrapper-${this.#id}`;
    wrapper.classList.add("wrapper");

    const style = document.createElement("style");
    style.textContent = this.styles;

    const defaultLoading: HTMLDivElement = document.createElement("div");
    defaultLoading.textContent = "Loading...";
    defaultLoading.classList.add("loading");

    const img: HTMLImageElement = document.createElement("img");
    img.id = `img-${this.#id}`;
    img.crossOrigin = "anonymous";
    img.classList.add("image", "hidden");

    const canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.id = `canvas-${this.#id}`;
    canvas.classList.add("hidden");

    const loadingSlot: HTMLSlotElement = document.createElement("slot");
    loadingSlot.name = "loading";
    loadingSlot.assign(defaultLoading);

    wrapper.appendChild(style);
    wrapper.appendChild(loadingSlot);
    wrapper.appendChild(img);
    wrapper.appendChild(canvas);

    this.shadowRoot?.append(wrapper);

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
    wrapper!.replaceWith(anchor);
  }
}

customElements.define("obfuscated-email-address", ObfuscatedEmailAddress);
