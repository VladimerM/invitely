import { ContactChannel, PricingPackageBase, TestimonialBase } from '../models/content';

// Text for everything here lives in the language dictionaries (src/app/i18n), keyed by `id`.

export const PRICING_PACKAGES: readonly PricingPackageBase[] = [
  { id: 'classic', price: 290, featured: false },
  { id: 'premium', price: 490, featured: true },
  { id: 'exclusive', price: 890, featured: false },
];

/** Builds a cropped, auto-format Unsplash image URL (Unsplash License: free for commercial use). */
const unsplash = (photoId: string): string =>
  `https://images.unsplash.com/photo-${photoId}?w=800&q=80&auto=format&fit=crop`;

// Stock photography stands in for client photos until real ones (with consent) are available.
export const TESTIMONIALS: readonly TestimonialBase[] = [
  {
    id: 'nino-giorgi',
    photo: { url: unsplash('1519741497674-611481863552'), credit: 'Nathan Dumlao' },
  },
  {
    id: 'tamar-levan',
    photo: { url: unsplash('1532712938310-34cb3982ef74'), credit: 'Foto Pettine' },
  },
  {
    id: 'keti',
    photo: { url: unsplash('1746300336572-75535acb7a85'), credit: 'German Krupenin' },
  },
];

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  { id: 'whatsapp', href: 'https://wa.me/', primary: true },
  { id: 'viber', href: '#order', primary: false },
  { id: 'instagram', href: '#order', primary: false },
];

export const STUDIO_EMAIL = 'hello@invitely.ge';
