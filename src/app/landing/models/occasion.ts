export const OCCASIONS = [
  'Wedding',
  'Birthday',
  'Christening',
  'Engagement',
  'Anniversary',
] as const;

export type Occasion = (typeof OCCASIONS)[number];

/** Showcase filter value: a single occasion, or every style. */
export type OccasionFilter = Occasion | 'All';

export interface OccasionOption {
  readonly value: OccasionFilter;
  /** Georgian label shown under the English one. */
  readonly labelKa: string;
}
