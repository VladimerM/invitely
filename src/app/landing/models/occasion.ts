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
