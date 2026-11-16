import { Component, inject } from '@angular/core';

import { I18n } from '../../../core/i18n/i18n';

@Component({
  selector: 'app-included-section',
  template: `
    @let text = t().included;
    <div class="container layout">
      <div class="section-intro__heading">
        <h2 class="display title">{{ text.title }}</h2>
      </div>
      <ul class="features">
        @for (feature of text.features; track feature.title) {
          <li class="feature">
            <span class="diamond" aria-hidden="true"></span>
            <div class="feature__text">
              <span class="feature__title">{{ feature.title }}</span>
              <span class="feature__description">{{ feature.description }}</span>
            </div>
          </li>
        }
      </ul>
    </div>
  `,
  styles: `
    :host {
      display: block;
      background: var(--color-sand);
    }

    .layout {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
      gap: 56px;
      padding-block: clamp(72px, 9vw, 120px);
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
      gap: 0 40px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .feature {
      display: flex;
      align-items: baseline;
      gap: 16px;
      padding: 20px 0;
      border-bottom: 1px solid rgba(31, 29, 26, 0.14);

      .diamond {
        transform: rotate(45deg) translateY(-2px);
      }
    }

    .feature__text {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .feature__title {
      font-family: var(--font-display);
      font-size: 22px;
      line-height: calc(1.2 * var(--leading-scale));
    }

    .feature__description {
      font-size: 14px;
      line-height: calc(1.55 * var(--leading-scale));
      font-weight: 300;
      color: var(--color-body);
    }
  `,
})
export class IncludedSection {
  protected readonly t = inject(I18n).t;
}
