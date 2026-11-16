import { Injectable, computed, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';

import { ThemeId } from '../models/invitation-theme';
import { Occasion } from '../models/occasion';

export interface OrderRequest {
  name: string;
  event: Occasion;
  /** yyyy-mm-dd from the native date input; empty when not chosen. */
  date: string;
  phone: string;
  /** Portfolio style the client picked, if they came from a live example. */
  style: ThemeId | '';
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
 * Holds no display text: validation messages and labels come from the active language.
 */
@Injectable()
export class OrderStore {
  private readonly request = signal<OrderRequest>({ ...EMPTY_ORDER });
  private readonly sent = signal(false);

  readonly form = form(
    this.request,
    (order) => {
      required(order.name);
      required(order.phone);
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
  readonly event = computed(() => this.request().event);
  /** Empty when the client left their name blank. */
  readonly firstName = computed(() => this.request().name.trim().split(/\s+/)[0]);

  /** Pre-fills the form from a portfolio style and re-opens it if already sent. */
  chooseStyle(styleId: ThemeId, occasion: Occasion): void {
    this.request.update((order) => ({ ...order, style: styleId, event: occasion }));
    this.sent.set(false);
  }
}
