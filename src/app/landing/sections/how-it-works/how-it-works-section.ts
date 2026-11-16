import { Component, inject } from '@angular/core';

import { I18n } from '../../../core/i18n/i18n';

@Component({
  selector: 'app-how-it-works-section',
  template: `
    @let text = t().howItWorks;
    <div class="container section">
      <div class="section-intro__heading heading">
        <h2 class="display">{{ text.title }}</h2>
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
