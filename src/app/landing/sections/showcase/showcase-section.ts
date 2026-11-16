import { Component, inject } from '@angular/core';

import { Eyebrow } from '../../../shared/ui/eyebrow/eyebrow';
import { OCCASION_OPTIONS } from '../../data/occasions';
import { ShowcaseStore } from '../../state/showcase-store';
import { ThemeCard } from './theme-card';

@Component({
  selector: 'app-showcase-section',
  imports: [Eyebrow, ThemeCard],
  templateUrl: './showcase-section.html',
  styleUrl: './showcase-section.scss',
})
export class ShowcaseSection {
  protected readonly store = inject(ShowcaseStore);
  protected readonly occasionOptions = OCCASION_OPTIONS;
}
