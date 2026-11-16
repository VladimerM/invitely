import { Component, inject, signal } from '@angular/core';

import { I18n } from '../../../core/i18n/i18n';
import { Eyebrow } from '../../../shared/ui/eyebrow/eyebrow';

/** Accordion where at most one answer is open at a time. */
@Component({
  selector: 'app-faq-section',
  imports: [Eyebrow],
  templateUrl: './faq-section.html',
  styleUrl: './faq-section.scss',
})
export class FaqSection {
  protected readonly t = inject(I18n).t;
  protected readonly openIndex = signal<number | null>(0);

  protected toggle(index: number): void {
    this.openIndex.update((open) => (open === index ? null : index));
  }
}
