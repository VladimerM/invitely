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
  readonly name: string;
  readonly attending: boolean;
  /** Party size; 0 when declined. */
  readonly guests: number;
  readonly note: string;
  readonly receivedLabel: string;
}
