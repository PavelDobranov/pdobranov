import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import "./components/sidebar";
import "./shoelace";
import "./style.css";

const COLOR_MODE_KEY = "pd-color-mode";

@customElement("pd-resume")
export class Resume extends LitElement {
  static styles = css`
    .container {
      width: 1024px;
      margin: var(--sl-spacing-large) auto;
      font-family: var(--sl-font-sans);
    }

    .header {
      display: flex;
      justify-content: flex-end;
      padding: var(--sl-spacing-large) 0;
      font-size: var(--sl-font-size-large);
    }

    .resume {
      display: flex;
      box-shadow: var(--sl-shadow-x-large);
    }

    pd-content {
      flex: 1;
    }
  `;

  @state()
  private colorMode: string = "light";

  override connectedCallback(): void {
    super.connectedCallback();

    this.setColorMode(localStorage.getItem(COLOR_MODE_KEY) || "light");
  }

  render() {
    return html`
      <div class="container">
        <div class="header">
          <sl-tooltip content="Download pdf">
            <sl-icon-button name="file-earmark-pdf"></sl-icon-button>
          </sl-tooltip>
          <sl-tooltip content="Color mode toggle">
            <sl-icon-button
              name=${this.colorMode === "light" ? "sun" : "moon"}
              @click=${() =>
                this.colorMode === "light"
                  ? this.setColorMode("dark")
                  : this.setColorMode("light")}
            ></sl-icon-button>
          </sl-tooltip>
        </div>
        <div class="resume">
          <pd-sidebar colorMode=${this.colorMode}></pd-sidebar>
        </div>
      </div>
    `;
  }

  private setColorMode(colorMode: string): void {
    if (colorMode === "light") {
      document.documentElement.classList.remove("sl-theme-dark");
    } else {
      document.documentElement.classList.add("sl-theme-dark");
    }

    this.colorMode = colorMode;
    localStorage.setItem(COLOR_MODE_KEY, colorMode);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pd-resume": Resume;
  }
}
