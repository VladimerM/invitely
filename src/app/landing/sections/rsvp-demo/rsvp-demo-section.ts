import { Component, DestroyRef, inject, signal } from '@angular/core';

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
  protected readonly responses = signal<readonly RsvpResponse[]>(SAMPLE_RSVP_RESPONSES);
  protected readonly highlightedId = signal<number | null>(null);

  private nextId = SAMPLE_RSVP_RESPONSES.length + 1;
  private highlightTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.highlightTimer));
  }

  protected addResponse(reply: RsvpReply): void {
    const response: RsvpResponse = { ...reply, id: this.nextId++, receivedLabel: 'Just now' };
    this.responses.update((responses) => [response, ...responses]);

    this.highlightedId.set(response.id);
    clearTimeout(this.highlightTimer);
    this.highlightTimer = setTimeout(() => this.highlightedId.set(null), HIGHLIGHT_MS);
  }
}
