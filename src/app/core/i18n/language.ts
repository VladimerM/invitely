export const LANGUAGES = ['ka', 'en', 'ru'] as const;

export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = 'ka';

/** BCP 47 locale used for `Intl` date, number and plural formatting. */
export const LOCALES: Readonly<Record<Language, string>> = {
  ka: 'ka-GE',
  en: 'en-GB',
  ru: 'ru-RU',
};

/** How each language presents itself in the switcher, in its own script. */
export const LANGUAGE_LABELS: Readonly<Record<Language, { short: string; name: string }>> = {
  ka: { short: 'GE', name: 'ქართული' },
  en: { short: 'EN', name: 'English' },
  ru: { short: 'RU', name: 'Русский' },
};

export function isLanguage(value: unknown): value is Language {
  return typeof value === 'string' && (LANGUAGES as readonly string[]).includes(value);
}

/** First supported language in the browser's preference list, if any. */
export function matchBrowserLanguage(preferred: readonly string[]): Language | null {
  for (const tag of preferred) {
    const base = tag.toLowerCase().split('-')[0];
    if (isLanguage(base)) return base;
  }
  return null;
}
