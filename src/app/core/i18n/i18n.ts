import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { MESSAGES } from '../../i18n/messages';
import {
  DEFAULT_LANGUAGE,
  LOCALES,
  Language,
  isLanguage,
  matchBrowserLanguage,
} from './language';

import { formatGeorgianDate, formatGeorgianHoursAgo, hasNativeGeorgian } from './georgian-dates';

const STORAGE_KEY = 'invitely.language';
const NATIVE_GEORGIAN = hasNativeGeorgian();

/**
 * The active UI language and everything derived from it: the message
 * dictionary, plus locale-aware date and relative-time formatting.
 * Switching language re-renders in place; the choice is remembered per browser.
 */
@Injectable({ providedIn: 'root' })
export class I18n {
  private readonly document = inject(DOCUMENT);

  private readonly current = signal<Language>(this.initialLanguage());

  readonly language = this.current.asReadonly();
  readonly locale = computed(() => LOCALES[this.current()]);
  /** Messages for the active language. */
  readonly t = computed(() => MESSAGES[this.current()]);

  constructor() {
    const title = inject(Title);
    const meta = inject(Meta);

    effect(() => {
      const language = this.current();
      const { meta: page } = this.t();
      this.document.documentElement.lang = language;
      title.setTitle(page.title);
      meta.updateTag({ name: 'description', content: page.description });
    });
  }

  setLanguage(language: Language): void {
    this.current.set(language);
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Storage blocked (private mode, disabled cookies): the choice lasts for this visit only.
    }
  }

  /** Formats an ISO date (`yyyy-mm-dd`) or local date-time in the active locale. */
  formatDate(iso: string, options: Intl.DateTimeFormatOptions): string {
    // A bare date would parse as UTC midnight and could land on the previous day locally.
    const date = new Date(iso.length === 10 ? `${iso}T00:00` : iso);
    if (this.useGeorgianFallback()) return formatGeorgianDate(date, options);
    return new Intl.DateTimeFormat(this.locale(), options).format(date);
  }

  /** "2 hours ago", "yesterday", "3 days ago" — or the dictionary's "just now" under an hour. */
  formatHoursAgo(hours: number): string {
    if (hours < 1) return this.t().common.justNow;
    if (this.useGeorgianFallback()) return formatGeorgianHoursAgo(hours);
    const format = new Intl.RelativeTimeFormat(this.locale(), { numeric: 'auto' });
    return hours < 24 ? format.format(-hours, 'hour') : format.format(-Math.floor(hours / 24), 'day');
  }

  private useGeorgianFallback(): boolean {
    return this.current() === 'ka' && !NATIVE_GEORGIAN;
  }

  private initialLanguage(): Language {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (isLanguage(saved)) return saved;
    } catch {
      // Fall through to the browser's preference.
    }
    const preferred = this.document.defaultView?.navigator.languages ?? [];
    return matchBrowserLanguage(preferred) ?? DEFAULT_LANGUAGE;
  }
}
