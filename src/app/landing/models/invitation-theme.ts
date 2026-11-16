import { Occasion } from './occasion';

export interface ThemePalette {
  readonly background: string;
  readonly ink: string;
  readonly accent: string;
  /** Translucent ink used for hatched photo placeholders. */
  readonly stripe: string;
}

export interface ScheduleItem {
  readonly time: string;
  readonly label: string;
}

/** A portfolio style, rendered with sample event details. */
export interface InvitationTheme {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  /** First entry is the style's primary occasion. */
  readonly occasions: readonly [Occasion, ...Occasion[]];
  readonly palette: ThemePalette;
  readonly sample: {
    readonly intro: string;
    /** Hosts' names render as `first`, a smaller accent `joiner`, then `second`. */
    readonly first: string;
    readonly joiner: string;
    readonly second: string;
    readonly monogram: string;
    readonly shortDate: string;
    readonly longDate: string;
    /** ISO local date-time the countdown runs to. */
    readonly startsAt: string;
    readonly venue: string;
    readonly schedule: readonly ScheduleItem[];
    readonly replyBy: string;
    readonly photoCaption: string;
  };
}
