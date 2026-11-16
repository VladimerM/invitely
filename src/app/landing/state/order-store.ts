import { Injectable, computed, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';

import { Occasion } from '../models/occasion';

export interface OrderRequest {
  name: string;
  event: Occasion;
  /** yyyy-mm-dd from the native date input; empty when not chosen. */
  date: string;
  phone: string;
  /** Portfolio style the client picked, if they came from a live example. */
  style: string;
}

const EMPTY_ORDER: OrderRequest = {
  name: '',
  event: 'Wedding',
  date: '',
  phone: '',
  style: '',
};

/**
 * The "leave your details" order request. Shared between the order form and
 * the live-example viewer, which can pre-select a style and occasion.
 */
@Injectable()
export class OrderStore {
  private readonly request = signal<OrderRequest>({ ...EMPTY_ORDER });
  private readonly sent = signal(false);

  readonly form = form(
    this.request,
    (order) => {
      required(order.name, { message: 'Please tell us your name' });
      required(order.phone, { message: 'We need a number to reach you' });
    },
    {
      submission: {
        action: async () => {
          // No backend yet: a real implementation would send `this.request()` here.
          this.sent.set(true);
          return undefined;
        },
      },
    },
  );

  readonly isSent = this.sent.asReadonly();
  readonly chosenStyle = computed(() => this.request().style);
  readonly firstName = computed(() => this.request().name.trim().split(/\s+/)[0] || 'friend');
  readonly eventLabel = computed(() => this.request().event.toLowerCase());

  /** Pre-fills the form from a portfolio style and re-opens it if already sent. */
  chooseStyle(styleName: string, occasion: Occasion): void {
    this.request.update((order) => ({ ...order, style: styleName, event: occasion }));
    this.sent.set(false);
  }
}
