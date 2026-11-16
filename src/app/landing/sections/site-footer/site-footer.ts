import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { STUDIO_CONTACT } from '../../data/content';

@Component({
  selector: 'app-site-footer',
  imports: [NgOptimizedImage],
  template: `
    <div class="container bar">
      <img
        class="wordmark"
        ngSrc="assets/wordmark-light.png"
        width="725"
        height="230"
        alt="Invitely"
      />
      <span>{{ contact.location }} · {{ contact.email }}</span>
      <span>© {{ year }} Invitely</span>
    </div>
  `,
  styles: `
    :host {
      display: block;
      background: var(--color-ink);
      color: var(--color-sand);
    }

    .bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      padding-top: 32px;
      padding-bottom: 40px;
      border-top: 1px solid rgba(237, 227, 211, 0.15);
      font-size: 13px;
    }

    .wordmark {
      width: auto;
      height: 26px;
    }
  `,
})
export class SiteFooter {
  protected readonly contact = STUDIO_CONTACT;
  protected readonly year = new Date().getFullYear();
}
