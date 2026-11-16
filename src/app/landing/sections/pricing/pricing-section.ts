import { Component, computed, inject } from '@angular/core';

import { I18n } from '../../../core/i18n/i18n';
import { PRICING_PACKAGES } from '../../data/content';

@Component({
  selector: 'app-pricing-section',
  templateUrl: './pricing-section.html',
  styleUrl: './pricing-section.scss',
})
export class PricingSection {
  protected readonly t = inject(I18n).t;
  protected readonly packages = computed(() => {
    const copy = this.t().pricing.packages;
    return PRICING_PACKAGES.map((base) => ({ ...base, ...copy[base.id] }));
  });
}
