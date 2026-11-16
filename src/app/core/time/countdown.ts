export interface Countdown {
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
}

const MS_PER_MINUTE = 60_000;
const MS_PER_HOUR = 60 * MS_PER_MINUTE;
const MS_PER_DAY = 24 * MS_PER_HOUR;

/** Whole days, hours and minutes from `now` until `target`; all zero once it has passed. */
export function countdownTo(target: string | Date, now: number): Countdown {
  const remaining = Math.max(0, new Date(target).getTime() - now);
  return {
    days: Math.floor(remaining / MS_PER_DAY),
    hours: Math.floor(remaining / MS_PER_HOUR) % 24,
    minutes: Math.floor(remaining / MS_PER_MINUTE) % 60,
  };
}
