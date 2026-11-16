import { Component } from '@angular/core';

import { Eyebrow } from '../../../shared/ui/eyebrow/eyebrow';
import { PRICING_PACKAGES } from '../../data/content';

@Component({
  selector: 'app-pricing-section',
  imports: [Eyebrow],
  templateUrl: './pricing-section.html',
  styleUrl: './pricing-section.scss',
})
export class PricingSection {
  protected readonly packages = PRICING_PACKAGES;
}
