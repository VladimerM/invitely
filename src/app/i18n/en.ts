import {
  ContactChannelId,
  FaqEntry,
  IncludedFeature,
  PackageId,
  PricingPackageCopy,
  ProcessStep,
  TestimonialCopy,
  TestimonialId,
} from '../landing/models/content';
import { InvitationThemeCopy, ThemeId } from '../landing/models/invitation-theme';
import { Occasion, OccasionFilter } from '../landing/models/occasion';
import { RsvpSampleCopy } from '../landing/models/rsvp';

/** A headline whose second part renders as italic gold emphasis. */
export interface Headline {
  readonly lead: string;
  readonly em: string;
}

const OCCASION_NOUN: Readonly<Record<Occasion, string>> = {
  Wedding: 'wedding',
  Birthday: 'birthday',
  Christening: 'christening',
  Engagement: 'engagement',
  Anniversary: 'anniversary',
};

/**
 * English UI text. Its shape is the contract for every language: `ka.ts` and
 * `ru.ts` are typed as `Messages`, so a missing or extra key fails the build.
 */
export const EN = {
  meta: {
    title: 'Invitely · Elegant digital invitations',
    description:
      'Choose a style, share your details, and we create a personalized digital invitation with RSVP. Georgian & English, ready in 2–5 days.',
  },

  common: {
    justNow: 'Just now',
    willYouJoin: 'Will you join us?',
    replyBy: (date: string) => `Kindly reply by ${date}`,
  },

  occasions: {
    All: 'All',
    Wedding: 'Wedding',
    Birthday: 'Birthday',
    Christening: 'Christening',
    Engagement: 'Engagement',
    Anniversary: 'Anniversary',
  } satisfies Record<OccasionFilter, string>,

  header: {
    homeLabel: 'Invitely, back to top',
    navLabel: 'Main',
    languageLabel: 'Language',
    links: { styles: 'Styles', how: 'How it works', pricing: 'Pricing', faq: 'FAQ' },
    order: 'Order',
  },

  hero: {
    kicker: 'Digital invitation studio · Tbilisi',
    headline: { lead: 'Elegant digital invitations,', em: 'designed for you.' } as Headline,
    intro: 'Choose a style, share your details, and we create a personalized invitation with RSVP.',
    orderCta: 'Order your invitation',
    examplesCta: 'See examples',
    highlights: ['Ready in 2–5 days', 'Georgian & English', 'RSVP included'],
    videoLabel:
      'Screen recording of an Invitely wedding invitation being opened and browsed on a phone',
  },

  showcase: {
    eyebrow: 'The portfolio',
    title: { lead: 'Styles we’ll make', em: 'entirely yours.' } as Headline,
    lede: 'Each piece is a starting point, not a template. We adapt colour, type, photography and wording to your day.',
    filterLabel: 'Filter styles by occasion',
    styleCount: (count: number) => `${count} ${count === 1 ? 'style' : 'styles'}`,
    openLive: (name: string) => `Open the ${name} live example`,
    viewLive: 'View live example',
  },

  themes: {
    ivory: {
      description:
        'Quiet ivory, gold foil detail and a classic serif. Timeless for church weddings and family celebrations.',
      intro: 'Together with their families',
      first: 'Nino',
      joiner: '&',
      second: 'Giorgi',
      monogram: 'N·G',
      venue: 'Old Town, Tbilisi',
      schedule: ['Ceremony at Sioni Cathedral', 'Dinner and dancing'],
      photoCaption: 'couple photo',
    },
    midnight: {
      description:
        'Deep green-black with warm gold. Made for evening receptions, vineyards and candlelight.',
      intro: 'Request the pleasure of your company',
      first: 'Ana',
      joiner: '&',
      second: 'Luka',
      monogram: 'A·L',
      venue: 'Château Mukhrani',
      schedule: ['Garden ceremony', 'Supra under the stars'],
      photoCaption: 'evening garden photo',
    },
    rose: {
      description: 'Soft blush and terracotta, a romantic italic. Light and modern for engagements.',
      intro: 'We said yes',
      first: 'Mariam',
      joiner: '&',
      second: 'Davit',
      monogram: 'M·D',
      venue: 'Sololaki, Tbilisi',
      schedule: ['Welcome drinks', 'Dinner with family'],
      photoCaption: 'engagement photo',
    },
    olive: {
      description: 'Sage, olive and linen tones for vineyard and countryside weddings.',
      intro: 'Join us in Kakheti',
      first: 'Tamar',
      joiner: '&',
      second: 'Levan',
      monogram: 'T·L',
      venue: 'Sighnaghi, Kakheti',
      schedule: ['Ceremony among the vines', 'Rtveli feast'],
      photoCaption: 'vineyard photo',
    },
    cloud: {
      description:
        'Powder blue and soft grey, gentle and airy. For christenings and first birthdays.',
      intro: 'Join us for the christening of',
      first: 'Baby',
      joiner: '·',
      second: 'Elene',
      monogram: 'E',
      venue: 'Sameba Cathedral',
      schedule: ['Christening', 'Family lunch'],
      photoCaption: 'baby photo',
    },
    golden: {
      description: 'Warm amber on espresso. A grown-up birthday style with evening glow.',
      intro: 'Celebrate with us',
      first: 'Saba',
      joiner: 'turns',
      second: 'Thirty',
      monogram: '30',
      venue: 'Rooftop, Vake',
      schedule: ['Cocktails at sunset', 'DJ and dancing'],
      photoCaption: 'portrait photo',
    },
    silver: {
      description: 'Silver and pearl grey with refined spacing. For milestone anniversaries.',
      intro: 'Twenty-five years of',
      first: 'Irakli',
      joiner: '&',
      second: 'Keti',
      monogram: '25',
      venue: 'Batumi Boulevard',
      schedule: ['Toast to 25 years', 'Dinner by the sea'],
      photoCaption: 'then & now photo',
    },
    noir: {
      description: 'Black tie, gold flecks. Bold and festive for milestone birthdays.',
      intro: 'An evening for',
      first: 'Sophie',
      joiner: '·',
      second: 'Forty',
      monogram: 'S',
      venue: 'Fabrika, Tbilisi',
      schedule: ['Arrivals', 'Cake and champagne'],
      photoCaption: 'party photo',
    },
    mtatsminda: {
      description: 'Terracotta and warm sand inspired by Tbilisi rooftops at dusk.',
      intro: 'Above the city lights',
      first: 'Natia',
      joiner: '&',
      second: 'Sandro',
      monogram: 'N·S',
      venue: 'Mtatsminda, Tbilisi',
      schedule: ['Sunset ceremony', 'Dinner over the city'],
      photoCaption: 'city skyline photo',
    },
  } satisfies Record<ThemeId, InvitationThemeCopy>,

  howItWorks: {
    eyebrow: 'How it works',
    title: { lead: 'You share the story.', em: 'We do the rest.' } as Headline,
    steps: [
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
    ] as readonly ProcessStep[],
  },

  included: {
    eyebrow: 'What’s included',
    title: 'Everything your guests need, in one link.',
    features: [
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
    ] as readonly IncludedFeature[],
  },

  rsvp: {
    eyebrow: 'RSVP, built in',
    title: { lead: 'No more counting replies', em: 'in group chats.' } as Headline,
    lede: 'Guests answer in seconds. You see every response, guest count and note in one place. Try it — send a reply on the left.',
    guestSees: 'What your guest sees',
    youSee: 'What you see',
    samples: [
      { name: 'Nino & Giorgi Beridze', note: 'Can’t wait!' },
      { name: 'Ana Kapanadze', note: '' },
      { name: 'Luka Tsiklauri', note: 'Abroad that week — sending love' },
      { name: 'Mariam Lomidze', note: 'One vegetarian' },
      { name: 'Davit Gelashvili', note: '' },
    ] as readonly RsvpSampleCopy[],
    list: {
      heading: 'Nino & Giorgi · Guest list',
      meta: 'Private host page · updates live',
      export: 'Export to Excel',
      guestsAttending: 'Guests attending',
      replies: 'Replies',
      declined: 'Declined',
      attending: 'Attending',
      notAttending: 'Declined',
      anonymous: 'Your guest',
    },
    card: {
      /** Followed by the guest's first name on its own line. */
      thanks: 'Thank you,',
      thanksAnonymous: 'Thank you!',
      reached: 'Your reply has reached Nino & Giorgi.',
      again: 'Send another reply',
      answerLabel: 'Your answer',
      accept: 'Joyfully accept',
      decline: 'Regretfully decline',
      name: 'Your name',
      namePlaceholder: 'e.g. Tamar Kvaratskhelia',
      guestCount: 'Number of guests',
      fewer: 'One fewer guest',
      more: 'One more guest',
      note: 'A note for the couple',
      notePlaceholder: 'Dietary needs, song requests, wishes…',
      send: 'Send reply',
    },
  },

  pricing: {
    eyebrow: 'Packages',
    title: { lead: 'Clear prices,', em: 'no surprises.' } as Headline,
    mostChosen: 'Most chosen',
    currencyLabel: 'lari',
    choose: (name: string) => `Choose ${name}`,
    packages: {
      classic: {
        name: 'Classic',
        tagline: 'A portfolio style with your details.',
        features: [
          'Portfolio style, your colours',
          'Your photos and text',
          'Map, countdown, RSVP',
          '1 round of revisions',
          'Delivered in 3 days',
          'One language',
        ],
      },
      premium: {
        name: 'Premium',
        tagline: 'Tailored design with motion and music.',
        features: [
          'Tailored palette, type and layout',
          'Opening animation and music',
          'Map, countdown, RSVP',
          '3 rounds of revisions',
          'Delivered in 2 days',
          'Georgian + English',
        ],
      },
      exclusive: {
        name: 'Exclusive',
        tagline: 'Bespoke, designed from a blank page.',
        features: [
          'Original design and monogram',
          'Custom animation and music',
          'Map, countdown, RSVP, guest export',
          'Unlimited revisions for 14 days',
          'Delivered in 5–7 days',
          'Up to 3 languages',
        ],
      },
    } satisfies Record<PackageId, PricingPackageCopy>,
  },

  testimonials: {
    eyebrow: 'Kind words',
    title: 'From our hosts.',
    photoCredit: (photographer: string) => `Photo: ${photographer} / Unsplash`,
    quoted: (text: string) => `“${text}”`,
    seeInvitation: 'See their invitation →',
    items: {
      'nino-giorgi': {
        quote: 'Our guests kept asking who made it. The RSVP list saved us weeks of phone calls.',
        author: 'Nino & Giorgi · Wedding',
        photoAlt: 'Groom beside the bride holding a bouquet',
      },
      'tamar-levan': {
        quote: 'They understood exactly what we wanted from a few photos and a voice message.',
        author: 'Tamar & Levan · Wedding',
        photoAlt: 'Bride and groom walking together on a hillside',
      },
      keti: {
        quote: 'Elegant, fast, and the whole family could reply in Georgian.',
        author: 'Keti · Christening',
        photoAlt: 'A baby being baptised with water',
      },
    } satisfies Record<TestimonialId, TestimonialCopy>,
  },

  faq: {
    eyebrow: 'Questions',
    title: 'Good to know.',
    entries: [
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
    ] as readonly FaqEntry[],
  },

  order: {
    headline: { lead: 'Let’s create your', em: 'invitation.' } as Headline,
    pitch: 'Message us directly — we usually reply within the hour, in Georgian, English or Russian.',
    channels: {
      whatsapp: 'Message on WhatsApp',
      viber: 'Viber',
      instagram: 'Instagram',
    } satisfies Record<ContactChannelId, string>,
    formTitle: 'Or leave your details',
    name: 'Your name',
    namePlaceholder: 'Nino Beridze',
    nameRequired: 'Please tell us your name',
    eventType: 'Event type',
    eventDate: 'Event date',
    phone: 'Phone',
    phoneRequired: 'We need a number to reach you',
    style: (name: string) => `Style: ${name}`,
    submit: 'Request my invitation',
    thanks: (firstName: string) => `Thank you, ${firstName}.`,
    friend: 'friend',
    sent: (event: Occasion) =>
      `We’ll call or message you shortly to talk through your ${OCCASION_NOUN[event]}.`,
  },

  footer: {
    location: 'Tbilisi, Georgia',
  },

  liveExample: {
    kicker: (occasion: string) => `${occasion} · Live example`,
    paletteLabel: 'Colour palette',
    hint: 'Tap the invitation to open it, then scroll.',
    order: 'Order this style',
    previous: 'Previous style',
    next: 'Next style',
    close: 'Close',
  },

  invitation: {
    music: (on: boolean) => `♪ Music ${on ? 'on' : 'off'}`,
    countingDown: 'Counting down',
    theDay: 'The day',
    venueMap: 'venue map',
    openInMaps: 'Open in Maps',
    accept: 'Accept',
    decline: 'Decline',
    credit: 'Made by Invitely',
    youAreInvited: 'You are invited',
    open: 'Open invitation',
  },

  countdown: {
    days: 'days',
    hours: 'hours',
    minutes: 'min',
    label: (days: number, hours: number, minutes: number) =>
      `${days} days, ${hours} hours and ${minutes} minutes to go`,
  },
};

export type Messages = typeof EN;
