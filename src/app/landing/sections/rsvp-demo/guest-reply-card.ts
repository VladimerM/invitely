import { Component, inject, output, signal } from '@angular/core';
import { FormField, FormRoot, form } from '@angular/forms/signals';

import { I18n } from '../../../core/i18n/i18n';
import { RsvpReply } from '../../models/rsvp';

const MIN_GUESTS = 1;
const MAX_GUESTS = 8;

/** The demo invitation is Nino & Giorgi's (the Ivory Vow sample). */
const REPLY_BY = '2027-05-01';

const blankReply = (): RsvpReply => ({ attending: true, guests: 2, name: '', note: '' });

/** The RSVP card a guest fills in on their phone. */
@Component({
  selector: 'app-guest-reply-card',
  imports: [FormRoot, FormField],
  templateUrl: './guest-reply-card.html',
  styleUrl: './guest-reply-card.scss',
})
export class GuestReplyCard {
  protected readonly i18n = inject(I18n);
  protected readonly t = this.i18n.t;
  protected readonly replyBy = REPLY_BY;

  readonly replied = output<RsvpReply>();

  protected readonly minGuests = MIN_GUESTS;
  protected readonly maxGuests = MAX_GUESTS;

  protected readonly reply = signal<RsvpReply>(blankReply());
  protected readonly replyForm = form(this.reply, {
    submission: {
      action: async () => {
        this.send();
        return undefined;
      },
    },
  });

  /** Set once a reply has been sent; `firstName` is empty when the guest left it blank. */
  protected readonly confirmation = signal<{ firstName: string } | null>(null);

  protected setAttending(attending: boolean): void {
    this.replyForm.attending().value.set(attending);
  }

  protected changeGuests(delta: 1 | -1): void {
    this.replyForm
      .guests()
      .value.update((count) => Math.min(MAX_GUESTS, Math.max(MIN_GUESTS, count + delta)));
  }

  protected startOver(): void {
    this.confirmation.set(null);
  }

  private send(): void {
    const { attending, guests, name, note } = this.reply();
    const trimmedName = name.trim();

    this.replied.emit({
      attending,
      guests: attending ? guests : 0,
      name: trimmedName,
      note: note.trim(),
    });
    this.confirmation.set({ firstName: trimmedName.split(/\s+/)[0] });
    this.reply.set(blankReply());
    this.replyForm().reset();
  }
}
