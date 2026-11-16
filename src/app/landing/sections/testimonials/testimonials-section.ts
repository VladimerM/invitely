import { Component, computed, inject } from '@angular/core';

import { I18n } from '../../../core/i18n/i18n';
import { TESTIMONIALS } from '../../data/content';
import { INVITATION_THEMES } from '../../data/themes';
import { ShowcaseStore } from '../../state/showcase-store';

/** Host quotes; each links to a live preview of the style that host ordered. */
@Component({
  selector: 'app-testimonials-section',
  template: `
    @let text = t().testimonials;
    <div class="container section">
      <h2 class="display heading">{{ text.title }}</h2>
      <div class="quotes">
        @for (testimonial of testimonials(); track testimonial.id) {
          <figure class="quote">
            <blockquote class="quote__text">{{ text.quoted(testimonial.quote) }}</blockquote>
            <figcaption class="quote__caption">
              <span class="quote__author">{{ testimonial.author }}</span>
              <button
                type="button"
                class="text-link quote__style"
                (click)="showcase.openLive(testimonial.themeId)"
              >
                {{ text.seeInvitation(testimonial.styleName) }}
              </button>
            </figcaption>
          </figure>
        }
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
      background: var(--color-sand);
    }

    .heading {
      margin-bottom: 48px;
    }

    .quotes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
      gap: 48px clamp(28px, 4vw, 56px);
    }

    .quote {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 28px;
      margin: 0;
      padding-top: 24px;
      border-top: 1px solid rgba(31, 29, 26, 0.25);
    }

    .quote__text {
      margin: 0;
      font-family: var(--font-display);
      font-weight: 500;
      font-size: 25px;
      line-height: calc(1.3 * var(--leading-scale));
      text-wrap: pretty;
    }

    .quote__caption {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      font-size: 14px;
    }

    .quote__author {
      color: var(--color-taupe);
    }
  `,
})
export class TestimonialsSection {
  protected readonly t = inject(I18n).t;
  protected readonly showcase = inject(ShowcaseStore);

  protected readonly testimonials = computed(() => {
    const items = this.t().testimonials.items;
    return TESTIMONIALS.map((base) => ({
      ...base,
      ...items[base.id],
      styleName: INVITATION_THEMES.find((theme) => theme.id === base.themeId)?.name ?? '',
    }));
  });
}
