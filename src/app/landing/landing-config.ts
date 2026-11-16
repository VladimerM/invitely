import { InjectionToken } from '@angular/core';

export type CtaMode = 'messaging-and-form' | 'messaging-only' | 'form-only';

/** Presentation switches for the landing page (the design's tweakable props). */
export interface LandingConfig {
  /** Loop the envelope-opening animation in the hero. */
  readonly heroMotion: boolean;
  /** Maximum number of styles shown in the showcase grid. */
  readonly showcaseLimit: 6 | 9;
  /** Which contact options the closing call to action offers. */
  readonly ctaMode: CtaMode;
}

export const DEFAULT_LANDING_CONFIG: LandingConfig = {
  heroMotion: true,
  showcaseLimit: 9,
  ctaMode: 'messaging-and-form',
};

export const LANDING_CONFIG = new InjectionToken<LandingConfig>('LANDING_CONFIG', {
  providedIn: 'root',
  factory: () => DEFAULT_LANDING_CONFIG,
});
