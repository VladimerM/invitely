import { ThemeId } from './invitation-theme';

export interface ProcessStep {
  readonly numeral: string;
  readonly title: string;
  readonly description: string;
}

export interface IncludedFeature {
  readonly title: string;
  readonly description: string;
}

export type PackageId = 'classic' | 'premium' | 'exclusive';

export interface PricingPackageBase {
  readonly id: PackageId;
  /** Price in Georgian lari. */
  readonly price: number;
  readonly featured: boolean;
}

export interface PricingPackageCopy {
  readonly name: string;
  readonly tagline: string;
  readonly features: readonly string[];
}

export type PricingPackage = PricingPackageBase & PricingPackageCopy;

export type TestimonialId = 'nino-giorgi' | 'tamar-levan' | 'keti';

export interface TestimonialBase {
  readonly id: TestimonialId;
  /** The portfolio style the host ordered; the quote links to its live preview. */
  readonly themeId: ThemeId;
}

export interface TestimonialCopy {
  readonly quote: string;
  readonly author: string;
}

export type Testimonial = TestimonialBase & TestimonialCopy;

export interface FaqEntry {
  readonly question: string;
  readonly answer: string;
}

export type ContactChannelId = 'whatsapp' | 'viber' | 'instagram';

export interface ContactChannel {
  readonly id: ContactChannelId;
  readonly href: string;
  readonly primary: boolean;
}
