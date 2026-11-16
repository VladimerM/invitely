import {
  Component,
  DOCUMENT,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';

import { I18n } from '../../core/i18n/i18n';
import { PhoneFrame } from '../../shared/ui/phone-frame/phone-frame';
import { InvitationTheme } from '../models/invitation-theme';
import { Occasion } from '../models/occasion';
import { LiveInvitation } from './live-invitation';

/**
 * Full-screen viewer for one portfolio style: the style's details beside a
 * phone running the interactive invitation. Escape closes; arrow keys browse.
 */
@Component({
  selector: 'app-live-example-dialog',
  imports: [PhoneFrame, LiveInvitation],
  templateUrl: './live-example-dialog.html',
  styleUrl: './live-example-dialog.scss',
  host: {
    '(document:keydown.escape)': 'closed.emit()',
    '(document:keydown.arrowleft)': 'previous.emit()',
    '(document:keydown.arrowright)': 'next.emit()',
  },
})
export class LiveExampleDialog {
  protected readonly t = inject(I18n).t;

  readonly theme = input.required<InvitationTheme>();
  readonly occasion = input.required<Occasion>();

  readonly closed = output<void>();
  readonly previous = output<void>();
  readonly next = output<void>();
  readonly orderStyle = output<void>();

  private readonly dialog = viewChild.required<ElementRef<HTMLElement>>('dialog');

  constructor() {
    const document = inject(DOCUMENT);
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const body = document.body;
    const bodyOverflow = body.style.overflow;

    afterNextRender(() => {
      body.style.overflow = 'hidden';
      this.dialog().nativeElement.focus();
    });

    inject(DestroyRef).onDestroy(() => {
      body.style.overflow = bodyOverflow;
      // preventScroll: closing via "Order this style" scrolls elsewhere on purpose.
      previouslyFocused?.focus({ preventScroll: true });
    });
  }

  protected onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.closed.emit();
  }
}
