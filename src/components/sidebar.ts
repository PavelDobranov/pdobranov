import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./section";
import photo from "../assets/photo.jpg";

@customElement("pd-sidebar")
export class Sidebar extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      width: 300px;
      padding: var(--sl-spacing-large);
    }

    sl-avatar {
      --size: 10rem;
      align-self: center;
      margin: var(--sl-spacing-2x-large);
    }

    .contact-row {
      display: flex;
      align-items: center;
      gap: var(--sl-spacing-small);
      margin-bottom: var(--sl-spacing-medium);
    }

    .education-row {
      margin-bottom: var(--sl-spacing-medium);
    }

    .education-row .education-period {
      margin: 0;
    }

    .education-row .education-institution {
      margin: 0;
      font-weight: var(--sl-font-weight-bold);
    }

    .language-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--sl-spacing-medium);
    }
  `;

  @property({ type: String })
  colorMode: string = "light";

  render() {
    return html`
      <style>
        :host {
          color: ${this.colorMode === "light"
            ? "var(--sl-color-neutral-100)"
            : "var(--sl-color-neutral-900)"};
          background-color: ${this.colorMode === "light"
            ? "var(--sl-color-primary-950)"
            : "var(--sl-color-primary-50)"};
        }

        sl-avatar::part(base) {
          border: 2px solid
            ${this.colorMode === "light"
              ? "var(--sl-color-neutral-100)"
              : "var(--sl-color-neutral-900)"};
        }
      </style>

      <sl-avatar image=${photo}></sl-avatar>

      <pd-section title="contact">
        <div class="contact-row">
          <sl-icon name="telephone-fill"></sl-icon>
          +359887224174
        </div>
        <div class="contact-row">
          <sl-icon name="envelope"></sl-icon>
          pdobranov@gmail.com
        </div>
        <div class="contact-row">
          <sl-icon name="github"></sl-icon>
          https://github.com/paveldobranov
        </div>
      </pd-section>

      <pd-section title="education">
        <div class="education-row">
          <p class="education-institution">Telerik Software Academy</p>
          <p class="education-period">Jan 2015 - Feb 2016</p>
        </div>
        <div class="education-row">
          <p class="education-institution">Technical University - Varna</p>
          <p class="education-period">Sep 2000 - Jul 2006</p>
          Naval Architecture - Master's Degree
        </div>
      </pd-section>

      <pd-section title="languages">
        <div class="language-row">
          Bulgarian
          <sl-rating label="Rating" value="5" readonly></sl-rating>
        </div>
        <div class="language-row">
          English
          <sl-rating
            label="Rating"
            precision="0.5"
            value="3.5"
            readonly
          ></sl-rating>
        </div>
      </pd-section>
    `;
  }
}
