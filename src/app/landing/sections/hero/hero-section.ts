import { Component, inject } from '@angular/core';

import { I18n } from '../../../core/i18n/i18n';
import { LANDING_CONFIG } from '../../landing-config';
import { ProductVideoDemo } from './product-video-demo';

@Component({
  selector: 'app-hero-section',
  imports: [ProductVideoDemo],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  protected readonly t = inject(I18n).t;
  protected readonly motion = inject(LANDING_CONFIG).heroMotion;
}
