import { Injectable, computed, inject, signal } from '@angular/core';

import { INVITATION_THEMES } from '../data/themes';
import { LANDING_CONFIG } from '../landing-config';
import { InvitationTheme } from '../models/invitation-theme';
import { Occasion, OccasionFilter } from '../models/occasion';

/**
 * Portfolio browsing state: the active occasion filter and which style,
 * if any, is open in the live-example viewer.
 */
@Injectable()
export class ShowcaseStore {
  private readonly limit = inject(LANDING_CONFIG).showcaseLimit;
  private readonly liveThemeId = signal<string | null>(null);

  readonly occasion = signal<OccasionFilter>('All');

  readonly visibleThemes = computed(() => {
    const occasion = this.occasion();
    const matching =
      occasion === 'All'
        ? INVITATION_THEMES
        : INVITATION_THEMES.filter((theme) => theme.occasions.includes(occasion));
    return matching.slice(0, this.limit);
  });

  readonly liveTheme = computed(
    () => INVITATION_THEMES.find((theme) => theme.id === this.liveThemeId()) ?? null,
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
}
