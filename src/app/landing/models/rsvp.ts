/** What a guest fills in on the invitation's RSVP card. */
export interface RsvpReply {
  attending: boolean;
  guests: number;
  name: string;
  note: string;
}

/** A reply as the host sees it on their guest list. */
export interface RsvpResponse {
  readonly id: number;
  /** Empty when the guest left their name blank. */
  readonly name: string;
  readonly attending: boolean;
  /** Party size; 0 when declined. */
  readonly guests: number;
  readonly note: string;
  /** How long ago the reply arrived; formatted per language ("2 hours ago", "yesterday"). */
  readonly receivedHoursAgo: number;
}

/** A sample reply's language-specific text. */
export interface RsvpSampleCopy {
  readonly name: string;
  readonly note: string;
}
