import {
  ContactChannel,
  FaqEntry,
  IncludedFeature,
  PricingPackage,
  ProcessStep,
  Testimonial,
} from '../models/content';

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    numeral: 'I',
    title: 'Choose a style',
    description: 'Pick a design from our portfolio as the direction for yours.',
  },
  {
    numeral: 'II',
    title: 'Send us your details',
    description: 'Names, date, venue, photos and any wishes — by form or a simple message.',
  },
  {
    numeral: 'III',
    title: 'We design, you review',
    description: 'You receive a private preview and request changes until it feels right.',
  },
  {
    numeral: 'IV',
    title: 'Receive your link',
    description: 'Share it with guests and watch the replies arrive.',
  },
];

export const INCLUDED_FEATURES: readonly IncludedFeature[] = [
  { title: 'Personalized design', description: 'Adapted to your palette, story and occasion.' },
  { title: 'Your photos and text', description: 'Every word and image is yours.' },
  { title: 'Venue map', description: 'One tap to directions for every guest.' },
  { title: 'Countdown', description: 'A live timer to the big day.' },
  { title: 'Music, if you like', description: 'Your song plays as the invitation opens.' },
  {
    title: 'RSVP with responses to you',
    description: 'Attendance, guest count and notes in one list.',
  },
  {
    title: 'Edits after delivery',
    description: 'Changed the time or venue? We update the same link.',
  },
  { title: 'Share anywhere', description: 'WhatsApp, Viber, or a printed QR code.' },
];

export const PRICING_PACKAGES: readonly PricingPackage[] = [
  {
    name: 'Classic',
    tagline: 'A portfolio style with your details.',
    price: 290,
    features: [
      'Portfolio style, your colours',
      'Your photos and text',
      'Map, countdown, RSVP',
      '1 round of revisions',
      'Delivered in 3 days',
      'One language',
    ],
    featured: false,
  },
  {
    name: 'Premium',
    tagline: 'Tailored design with motion and music.',
    price: 490,
    features: [
      'Tailored palette, type and layout',
      'Opening animation and music',
      'Map, countdown, RSVP',
      '3 rounds of revisions',
      'Delivered in 2 days',
      'Georgian + English',
    ],
    featured: true,
  },
  {
    name: 'Exclusive',
    tagline: 'Bespoke, designed from a blank page.',
    price: 890,
    features: [
      'Original design and monogram',
      'Custom animation and music',
      'Map, countdown, RSVP, guest export',
      'Unlimited revisions for 14 days',
      'Delivered in 5–7 days',
      'Up to 3 languages',
    ],
    featured: false,
  },
];

/** Builds a cropped, auto-format Unsplash image URL (Unsplash License: free for commercial use). */
const unsplash = (photoId: string): string =>
  `https://images.unsplash.com/photo-${photoId}?w=800&q=80&auto=format&fit=crop`;

// Stock photography stands in for client photos until real ones (with consent) are available.
export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote: 'Our guests kept asking who made it. The RSVP list saved us weeks of phone calls.',
    author: 'Nino & Giorgi · Wedding',
    photo: {
      url: unsplash('1519741497674-611481863552'),
      alt: 'Groom beside the bride holding a bouquet',
      credit: 'Nathan Dumlao',
    },
  },
  {
    quote: 'They understood exactly what we wanted from a few photos and a voice message.',
    author: 'Tamar & Levan · Wedding',
    photo: {
      url: unsplash('1532712938310-34cb3982ef74'),
      alt: 'Bride and groom walking together on a hillside',
      credit: 'Foto Pettine',
    },
  },
  {
    quote: 'Elegant, fast, and the whole family could reply in Georgian.',
    author: 'Keti · Christening',
    photo: {
      url: unsplash('1746300336572-75535acb7a85'),
      alt: 'A baby being baptised with water',
      credit: 'German Krupenin',
    },
  },
];

export const FAQ_ENTRIES: readonly FaqEntry[] = [
  {
    question: 'How long does it take?',
    answer:
      'Classic is ready in 3 days, Premium in 2, and a bespoke Exclusive design in 5–7 days. Need it sooner? Ask about 24-hour delivery.',
  },
  {
    question: 'How many revisions do I get?',
    answer:
      'One round with Classic, three with Premium, and unlimited revisions for 14 days with Exclusive. Small text fixes are always free.',
  },
  {
    question: 'Can I change the date or venue after sending?',
    answer:
      'Yes. We update the invitation behind the same link, so guests always see the latest details — no need to resend.',
  },
  {
    question: 'Does it work in Georgian and English?',
    answer:
      'Yes. Every invitation can be in Georgian or English; Premium includes both with a language switch, and Exclusive supports up to three languages.',
  },
  {
    question: 'How do I see who’s coming?',
    answer:
      'You get a private host page with every reply, the total guest count and notes, updated live. You can export it to Excel at any time.',
  },
];

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  { label: 'Message on WhatsApp', href: 'https://wa.me/', primary: true },
  { label: 'Viber', href: '#order', primary: false },
  { label: 'Instagram', href: '#order', primary: false },
];

export const STUDIO_CONTACT = {
  location: 'Tbilisi, Georgia',
  email: 'hello@invitely.ge',
} as const;
