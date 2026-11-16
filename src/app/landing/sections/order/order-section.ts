import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormField, FormRoot } from '@angular/forms/signals';

import { I18n } from '../../../core/i18n/i18n';
import { CONTACT_CHANNELS } from '../../data/content';
import { INVITATION_THEMES } from '../../data/themes';
import { LANDING_CONFIG } from '../../landing-config';
import { ThemeId } from '../../models/invitation-theme';
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

  protected readonly t = inject(I18n).t;
  protected readonly order = inject(OrderStore);
  protected readonly orderForm = this.order.form;
  protected readonly occasions = OCCASIONS;
  protected readonly channels = CONTACT_CHANNELS;

  protected readonly showMessaging = this.ctaMode !== 'form-only';
  protected readonly showForm = this.ctaMode !== 'messaging-only';

  protected styleName(id: ThemeId): string {
    return INVITATION_THEMES.find((theme) => theme.id === id)?.name ?? id;
  }
}
