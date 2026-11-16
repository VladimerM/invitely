import { Component, inject } from '@angular/core';

import { I18n } from '../../../core/i18n/i18n';
import { OCCASION_FILTERS } from '../../data/occasions';
import { ShowcaseStore } from '../../state/showcase-store';
import { ThemeCard } from './theme-card';

@Component({
  selector: 'app-showcase-section',
  imports: [ThemeCard],
  templateUrl: './showcase-section.html',
  styleUrl: './showcase-section.scss',
})
export class ShowcaseSection {
  protected readonly t = inject(I18n).t;
  protected readonly store = inject(ShowcaseStore);
  protected readonly occasionFilters = OCCASION_FILTERS;
}
