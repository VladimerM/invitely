import { Occasion } from './occasion';

export type ThemeId =
  | 'ivory'
  | 'midnight'
  | 'rose'
  | 'olive'
  | 'cloud'
  | 'golden'
  | 'silver'
  | 'noir'
  | 'mtatsminda';

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

/** The language-independent part of a portfolio style. */
export interface InvitationThemeBase {
  readonly id: ThemeId;
  /** Style name; a brand name, kept the same in every language. */
  readonly name: string;
  /** First entry is the style's primary occasion. */
  readonly occasions: readonly [Occasion, ...Occasion[]];
  readonly palette: ThemePalette;
  /** ISO local date-time the event starts; the countdown runs to it. */
  readonly startsAt: string;
  /** ISO date (`yyyy-mm-dd`) guests should reply by. */
  readonly replyBy: string;
  /** Times of the day's programme; labels come from the copy, in the same order. */
  readonly scheduleTimes: readonly string[];
}

/** A style's sample wording in one language. */
export interface InvitationThemeCopy {
  readonly description: string;
  readonly intro: string;
  readonly first: string;
  readonly joiner: string;
  readonly second: string;
  readonly monogram: string;
  readonly venue: string;
  /** One label per `scheduleTimes` entry. */
  readonly schedule: readonly string[];
  readonly photoCaption: string;
}

/** A portfolio style, rendered with sample event details in the active language. */
export interface InvitationTheme {
  readonly id: ThemeId;
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
