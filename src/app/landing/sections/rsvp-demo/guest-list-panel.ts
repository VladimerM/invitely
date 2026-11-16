import { Component, computed, input } from '@angular/core';

import { RsvpResponse } from '../../models/rsvp';

/** The host's private dashboard: totals plus every reply received. */
@Component({
  selector: 'app-guest-list-panel',
  templateUrl: './guest-list-panel.html',
  styleUrl: './guest-list-panel.scss',
})
export class GuestListPanel {
  readonly responses = input.required<readonly RsvpResponse[]>();
  /** Reply to flash briefly, e.g. one that just arrived. */
  readonly highlightedId = input<number | null>(null);

  protected readonly stats = computed(() => {
    const responses = this.responses();
    const attending = responses.filter((response) => response.attending);
    return {
      guests: attending.reduce((total, response) => total + response.guests, 0),
      replies: responses.length,
      declined: responses.length - attending.length,
    };
  });
}
