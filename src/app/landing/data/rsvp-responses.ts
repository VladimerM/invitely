import { RsvpResponse } from '../models/rsvp';

/**
 * Sample guest list shown on the host dashboard demo. Names and notes come
 * from the active language's `rsvp.samples`, matched by position.
 */
export const SAMPLE_RSVP_RESPONSES: readonly Omit<RsvpResponse, 'name' | 'note'>[] = [
  { id: 1, attending: true, guests: 2, receivedHoursAgo: 2 },
  { id: 2, attending: true, guests: 1, receivedHoursAgo: 5 },
  { id: 3, attending: false, guests: 0, receivedHoursAgo: 26 },
  { id: 4, attending: true, guests: 3, receivedHoursAgo: 30 },
  { id: 5, attending: true, guests: 2, receivedHoursAgo: 50 },
];
