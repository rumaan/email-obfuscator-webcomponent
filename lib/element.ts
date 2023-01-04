import { decodeImage } from "./decoder";

export class ObfuscatedEmailAddress extends HTMLElement {
  src: string;
  id: string;

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.id = Math.random().toString().substring(2);
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
    const wrapper = document.createElement("div");
    wrapper.id = `wrapper-${this.id}`;
    wrapper.classList.add("wrapper");

    const style = document.createElement("style");
    style.textContent = this.styles;

    const loading = document.createElement("div");
    loading.textContent = "Loading...";
    loading.classList.add("loading");

    const img = document.createElement("img");
    img.id = `img-${this.id}`;
    img.crossOrigin = "anonymous";
    img.classList.add("image", "hidden");

    const canvas = document.createElement("canvas");
    canvas.id = `canvas-${this.id}`;
    canvas.classList.add("hidden");

    wrapper.appendChild(style);
    wrapper.appendChild(loading);
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
    this.src = currentValue ?? "";
  }

  init() {
    if (this.shadowRoot?.isConnected && this.src) {
      const wrapper = this.shadowRoot.getElementById(
        `wrapper-${this.id}`
      ) as HTMLDivElement;

      const img = this.shadowRoot.getElementById(
        `img-${this.id}`
      ) as HTMLImageElement;

      img.src = this.src;

      const canvas = this.shadowRoot.getElementById(
        `canvas-${this.id}`
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

  decodeImageAndUpdateDOM({
    canvas,
    img,
    wrapper,
  }: {
    canvas: HTMLCanvasElement;
    img: HTMLImageElement;
    wrapper: HTMLDivElement;
  }) {
    const link = decodeImage(canvas, img);
    if (link) {
      canvas.remove();
      img.remove();
      const loadingEl = wrapper.querySelector(".loading") as HTMLDivElement;
      loadingEl.classList.remove("loading");
      loadingEl.innerHTML = link;
    } else {
      console.error("Some error occurred while decoding the image");
      // TODO: throw exception
    }
  }
}

customElements.define("obfuscated-email-address", ObfuscatedEmailAddress);
