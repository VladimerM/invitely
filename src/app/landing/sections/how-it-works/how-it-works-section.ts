import { Component } from '@angular/core';

import { Eyebrow } from '../../../shared/ui/eyebrow/eyebrow';
import { PROCESS_STEPS } from '../../data/content';

@Component({
  selector: 'app-how-it-works-section',
  imports: [Eyebrow],
  template: `
    <div class="container section">
      <div class="section-intro__heading heading">
        <app-eyebrow>How it works</app-eyebrow>
        <h2 class="display">You share the story. <em>We do the rest.</em></h2>
      </div>
      <ol class="steps">
        @for (step of steps; track step.numeral) {
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
  protected readonly steps = PROCESS_STEPS;
}
