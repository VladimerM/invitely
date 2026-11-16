import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { Eyebrow } from '../../../shared/ui/eyebrow/eyebrow';
import { TESTIMONIALS } from '../../data/content';

@Component({
  selector: 'app-testimonials-section',
  imports: [Eyebrow, NgOptimizedImage],
  template: `
    <div class="container content">
      <div class="section-intro__heading heading">
        <app-eyebrow tone="taupe">Kind words</app-eyebrow>
        <h2 class="display title">From our hosts.</h2>
      </div>
      <div class="quotes">
        @for (testimonial of testimonials; track testimonial.author) {
          <figure class="quote">
            <div class="photo">
              <img [ngSrc]="testimonial.photo.url" [alt]="testimonial.photo.alt" fill />
              <span class="photo__credit">Photo: {{ testimonial.photo.credit }} / Unsplash</span>
            </div>
            <blockquote class="quote__text">“{{ testimonial.quote }}”</blockquote>
            <figcaption class="quote__caption">
              <span>{{ testimonial.author }}</span>
              <a href="#styles" class="quote__link">See their invitation →</a>
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

    .content {
      padding-block: clamp(72px, 9vw, 120px);
    }

    .heading {
      margin-bottom: 56px;
      max-width: none;
    }

    .title {
      font-size: clamp(40px, 5vw, 60px);
    }

    .quotes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
      gap: 32px;
    }

    .quote {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 0;
    }

    .photo {
      position: relative;
      aspect-ratio: 4 / 3;
      overflow: hidden;
      border-radius: 4px;
      background: rgba(140, 127, 112, 0.15);

      img {
        object-fit: cover;
      }
    }

    .photo__credit {
      position: absolute;
      left: 10px;
      bottom: 10px;
      padding: 3px 8px;
      border-radius: 999px;
      background: rgba(31, 29, 26, 0.55);
      font-size: 10px;
      letter-spacing: 0.04em;
      color: var(--color-paper);
    }

    .quote__text {
      margin: 0;
      font-family: var(--font-display);
      font-style: italic;
      font-size: 24px;
      line-height: 1.3;
      text-wrap: pretty;
    }

    .quote__caption {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
      font-size: 13px;
      letter-spacing: 0.04em;
    }

    .quote__link {
      padding-bottom: 2px;
      border-bottom: 1px solid var(--color-gold);
      letter-spacing: 0;
    }
  `,
})
export class TestimonialsSection {
  protected readonly testimonials = TESTIMONIALS;
}
