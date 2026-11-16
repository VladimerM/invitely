import {
  Component,
  ElementRef,
  afterRenderEffect,
  input,
  linkedSignal,
  signal,
  viewChild,
} from '@angular/core';

import { CountdownTiles } from '../../shared/ui/countdown-tiles/countdown-tiles';
import { InvitationTheme } from '../models/invitation-theme';

type RsvpAnswer = 'accept' | 'decline';

/**
 * A complete guest-facing invitation in a given style: an envelope cover that
 * lifts on tap, then a scrollable page with countdown, schedule, map and RSVP.
 */
@Component({
  selector: 'app-live-invitation',
  imports: [CountdownTiles],
  templateUrl: './live-invitation.html',
  styleUrl: './live-invitation.scss',
  host: {
    '[style.--theme-bg]': 'theme().palette.background',
    '[style.--theme-ink]': 'theme().palette.ink',
    '[style.--theme-accent]': 'theme().palette.accent',
    '[style.--theme-stripe]': 'theme().palette.stripe',
  },
})
export class LiveInvitation {
  readonly theme = input.required<InvitationTheme>();

  /** Whether the envelope cover has been lifted. Resets for every style. */
  protected readonly coverOpen = linkedSignal({ source: this.theme, computation: () => false });
  protected readonly answer = linkedSignal<InvitationTheme, RsvpAnswer | null>({
    source: this.theme,
    computation: () => null,
  });
  /** Purely visual toggle; persists while browsing styles. */
  protected readonly musicOn = signal(false);

  private readonly scroller = viewChild.required<ElementRef<HTMLElement>>('scroller');

  constructor() {
    // Every newly shown style starts at the top of the page.
    afterRenderEffect(() => {
      this.theme();
      this.scroller().nativeElement.scrollTop = 0;
    });
  }
}
