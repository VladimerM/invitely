import { Language } from '../core/i18n/language';
import { EN, Messages } from './en';
import { KA } from './ka';
import { RU } from './ru';

export type { Headline, Messages } from './en';

export const MESSAGES: Readonly<Record<Language, Messages>> = { ka: KA, en: EN, ru: RU };
