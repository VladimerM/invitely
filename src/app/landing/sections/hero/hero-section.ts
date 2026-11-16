import { Component, inject } from '@angular/core';

import { LANDING_CONFIG } from '../../landing-config';
import { EnvelopeDemo } from './envelope-demo';

@Component({
  selector: 'app-hero-section',
  imports: [EnvelopeDemo],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  protected readonly motion = inject(LANDING_CONFIG).heroMotion;
  protected readonly highlights = ['Ready in 2–5 days', 'Georgian & English', 'RSVP included'];
}
