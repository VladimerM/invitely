import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormField, FormRoot } from '@angular/forms/signals';

import { CONTACT_CHANNELS } from '../../data/content';
import { LANDING_CONFIG } from '../../landing-config';
import { OCCASIONS } from '../../models/occasion';
import { OrderStore } from '../../state/order-store';

@Component({
  selector: 'app-order-section',
  imports: [NgOptimizedImage, FormRoot, FormField],
  templateUrl: './order-section.html',
  styleUrl: './order-section.scss',
})
export class OrderSection {
  private readonly ctaMode = inject(LANDING_CONFIG).ctaMode;

  protected readonly order = inject(OrderStore);
  protected readonly orderForm = this.order.form;
  protected readonly occasions = OCCASIONS;
  protected readonly channels = CONTACT_CHANNELS;

  protected readonly showMessaging = this.ctaMode !== 'form-only';
  protected readonly showForm = this.ctaMode !== 'messaging-only';
}
