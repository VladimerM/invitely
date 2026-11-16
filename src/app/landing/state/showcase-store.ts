import { Injectable, computed, inject, signal } from '@angular/core';

import { I18n } from '../../core/i18n/i18n';
import { INVITATION_THEMES } from '../data/themes';
import { LANDING_CONFIG } from '../landing-config';
import { InvitationTheme, InvitationThemeBase, InvitationThemeCopy } from '../models/invitation-theme';
import { Occasion, OccasionFilter } from '../models/occasion';

const pad = (value: number): string => String(value).padStart(2, '0');

/** "12 · 06 · 2027" from an ISO local date-time; numeric, so the same in every language. */
function shortDate(iso: string): string {
  const date = new Date(iso);
  return `${pad(date.getDate())} · ${pad(date.getMonth() + 1)} · ${date.getFullYear()}`;
}

/**
 * Portfolio browsing state: the active occasion filter and which style,
 * if any, is open in the live-example viewer. Styles are served in the active language.
 */
@Injectable()
export class ShowcaseStore {
  private readonly i18n = inject(I18n);
  private readonly limit = inject(LANDING_CONFIG).showcaseLimit;
  private readonly liveThemeId = signal<string | null>(null);

  readonly occasion = signal<OccasionFilter>('All');

  /** Every style, with sample wording and dates in the active language. */
  readonly themes = computed(() => {
    const copy = this.i18n.t().themes;
    return INVITATION_THEMES.map((base) => this.localize(base, copy[base.id]));
  });

  readonly visibleThemes = computed(() => {
    const occasion = this.occasion();
    const themes = this.themes();
    const matching =
      occasion === 'All' ? themes : themes.filter((theme) => theme.occasions.includes(occasion));
    return matching.slice(0, this.limit);
  });

  readonly liveTheme = computed(
    () => this.themes().find((theme) => theme.id === this.liveThemeId()) ?? null,
  );

  styleCount(occasion: OccasionFilter): number {
    return occasion === 'All'
      ? INVITATION_THEMES.length
      : INVITATION_THEMES.filter((theme) => theme.occasions.includes(occasion)).length;
  }

  /** The occasion a style is presented under: the active filter, else its primary one. */
  occasionFor(theme: InvitationTheme): Occasion {
    const occasion = this.occasion();
    return occasion !== 'All' && theme.occasions.includes(occasion) ? occasion : theme.occasions[0];
  }

  selectOccasion(occasion: OccasionFilter): void {
    this.occasion.set(occasion);
  }

  openLive(themeId: string): void {
    this.liveThemeId.set(themeId);
  }

  closeLive(): void {
    this.liveThemeId.set(null);
  }

  /** Moves the live viewer to the next (1) or previous (-1) visible style, wrapping around. */
  stepLive(direction: 1 | -1): void {
    const themes = this.visibleThemes();
    if (themes.length === 0) return;
    const index = themes.findIndex((theme) => theme.id === this.liveThemeId());
    const next = themes[(index + direction + themes.length) % themes.length];
    this.liveThemeId.set(next.id);
  }

  private localize(base: InvitationThemeBase, copy: InvitationThemeCopy): InvitationTheme {
    const { description, schedule, ...sample } = copy;
    return {
      id: base.id,
      name: base.name,
      description,
      occasions: base.occasions,
      palette: base.palette,
      sample: {
        ...sample,
        startsAt: base.startsAt,
        shortDate: shortDate(base.startsAt),
        longDate: this.i18n.formatDate(base.startsAt, {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        replyBy: this.i18n.formatDate(base.replyBy, { day: 'numeric', month: 'long' }),
        schedule: base.scheduleTimes.map((time, i) => ({ time, label: schedule[i] ?? '' })),
      },
    };
  }
}
