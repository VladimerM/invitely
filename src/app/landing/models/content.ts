export interface ProcessStep {
  readonly numeral: string;
  readonly title: string;
  readonly description: string;
}

export interface IncludedFeature {
  readonly title: string;
  readonly description: string;
}

export interface PricingPackage {
  readonly name: string;
  readonly tagline: string;
  /** Price in Georgian lari. */
  readonly price: number;
  readonly features: readonly string[];
  readonly featured: boolean;
}

export interface Photo {
  readonly url: string;
  readonly alt: string;
  /** Photographer attribution, shown on the image. */
  readonly credit: string;
}

export interface Testimonial {
  readonly quote: string;
  readonly author: string;
  readonly photo: Photo;
}

export interface FaqEntry {
  readonly question: string;
  readonly answer: string;
}

export interface ContactChannel {
  readonly label: string;
  readonly href: string;
  readonly primary: boolean;
}
