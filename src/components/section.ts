import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("pd-section")
export class Section extends LitElement {
  static styles = css`
    :host {
      margin-bottom: var(--sl-spacing-large);
    }

    .title {
      margin-bottom: var(--sl-font-size-medium);
      font-size: var(--sl-font-size-x-large);
      font-weight: var(--sl-font-weight-semibold);
      text-transform: uppercase;
      text-decoration: underline;
    }
  `;

  @property({ type: String })
  title: string = "";

  render() {
    return html`
      <section>
        <p class="title">${this.title}</p>
        <slot></slot>
      </section>
    `;
  }
}
