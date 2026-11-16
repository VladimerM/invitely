import { Component, inject } from '@angular/core';

import { I18n } from '../../../core/i18n/i18n';
import { Eyebrow } from '../../../shared/ui/eyebrow/eyebrow';

@Component({
  selector: 'app-how-it-works-section',
  imports: [Eyebrow],
  template: `
    @let text = t().howItWorks;
    <div class="container section">
      <div class="section-intro__heading heading">
        <app-eyebrow>{{ text.eyebrow }}</app-eyebrow>
        <h2 class="display">{{ text.title.lead }} <em>{{ text.title.em }}</em></h2>
      </div>
      <ol class="steps">
        @for (step of text.steps; track step.numeral) {
          <li class="step">
            <span class="step__numeral" aria-hidden="true">{{ step.numeral }}</span>
            <h3 class="step__title">{{ step.title }}</h3>
            <p class="step__text">{{ step.description }}</p>
          </li>
        }
      </ol>
    </div>
  `,
  styleUrl: './how-it-works-section.scss',
})
export class HowItWorksSection {
  protected readonly t = inject(I18n).t;
}
