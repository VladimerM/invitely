import { Component, signal } from '@angular/core';

import { Eyebrow } from '../../../shared/ui/eyebrow/eyebrow';
import { FAQ_ENTRIES } from '../../data/content';

/** Accordion where at most one answer is open at a time. */
@Component({
  selector: 'app-faq-section',
  imports: [Eyebrow],
  templateUrl: './faq-section.html',
  styleUrl: './faq-section.scss',
})
export class FaqSection {
  protected readonly entries = FAQ_ENTRIES;
  protected readonly openIndex = signal<number | null>(0);

  protected toggle(index: number): void {
    this.openIndex.update((open) => (open === index ? null : index));
  }
}
