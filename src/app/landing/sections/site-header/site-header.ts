import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';

import { I18n } from '../../../core/i18n/i18n';
import { LANGUAGES, LANGUAGE_LABELS } from '../../../core/i18n/language';

@Component({
  selector: 'app-site-header',
  imports: [NgOptimizedImage],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly i18n = inject(I18n);
  protected readonly t = this.i18n.t;

  protected readonly languages = LANGUAGES;
  protected readonly languageLabels = LANGUAGE_LABELS;

  protected readonly links = [
    { key: 'styles', href: '#styles' },
    { key: 'how', href: '#how' },
    { key: 'pricing', href: '#pricing' },
    { key: 'faq', href: '#faq' },
  ] as const;
}
