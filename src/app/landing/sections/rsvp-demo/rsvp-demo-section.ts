import { Component, DestroyRef, computed, inject, signal } from '@angular/core';

import { I18n } from '../../../core/i18n/i18n';
import { Eyebrow } from '../../../shared/ui/eyebrow/eyebrow';
import { PhoneFrame } from '../../../shared/ui/phone-frame/phone-frame';
import { SAMPLE_RSVP_RESPONSES } from '../../data/rsvp-responses';
import { RsvpReply, RsvpResponse } from '../../models/rsvp';
import { GuestListPanel } from './guest-list-panel';
import { GuestReplyCard } from './guest-reply-card';

const HIGHLIGHT_MS = 2500;

/** Side-by-side demo: a guest replies on the left, the host's list updates on the right. */
@Component({
  selector: 'app-rsvp-demo-section',
  imports: [Eyebrow, PhoneFrame, GuestReplyCard, GuestListPanel],
  templateUrl: './rsvp-demo-section.html',
  styleUrl: './rsvp-demo-section.scss',
})
export class RsvpDemoSection {
  protected readonly t = inject(I18n).t;

  /** Replies sent from the demo card this visit, newest first. Kept as typed, in any language. */
  private readonly added = signal<readonly RsvpResponse[]>([]);

  protected readonly responses = computed<readonly RsvpResponse[]>(() => {
    const samples = this.t().rsvp.samples;
    return [
      ...this.added(),
      ...SAMPLE_RSVP_RESPONSES.map((sample, i) => ({ ...sample, ...samples[i] })),
    ];
  });
  protected readonly highlightedId = signal<number | null>(null);

  private nextId = SAMPLE_RSVP_RESPONSES.length + 1;
  private highlightTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.highlightTimer));
  }

  protected addResponse(reply: RsvpReply): void {
    const response: RsvpResponse = { ...reply, id: this.nextId++, receivedHoursAgo: 0 };
    this.added.update((added) => [response, ...added]);

    this.highlightedId.set(response.id);
    clearTimeout(this.highlightTimer);
    this.highlightTimer = setTimeout(() => this.highlightedId.set(null), HIGHLIGHT_MS);
  }
}
