import { ContactChannel, PricingPackageBase, TestimonialBase } from '../models/content';

// Text for everything here lives in the language dictionaries (src/app/i18n), keyed by `id`.

export const PRICING_PACKAGES: readonly PricingPackageBase[] = [
  { id: 'classic', price: 290, featured: false },
  { id: 'premium', price: 490, featured: true },
  { id: 'exclusive', price: 890, featured: false },
];

// Placeholder quotes until real client feedback (with consent) is available.
export const TESTIMONIALS: readonly TestimonialBase[] = [
  { id: 'nino-giorgi', themeId: 'ivory' },
  { id: 'tamar-levan', themeId: 'olive' },
  { id: 'keti', themeId: 'cloud' },
];

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  { id: 'whatsapp', href: 'https://wa.me/', primary: true },
  { id: 'viber', href: '#order', primary: false },
  { id: 'instagram', href: '#order', primary: false },
];

export const STUDIO_EMAIL = 'hello@invitely.ge';
