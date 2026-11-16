import { Component, ElementRef, afterNextRender, computed, inject, input, viewChild } from '@angular/core';

import { I18n } from '../../../core/i18n/i18n';
import { PhoneFrame } from '../../../shared/ui/phone-frame/phone-frame';
import { ShowcaseStore } from '../../state/showcase-store';

/** Printed card plus a phone mock-up that loops a screen recording of a finished invitation. */
@Component({
  selector: 'app-product-video-demo',
  imports: [PhoneFrame],
  templateUrl: './product-video-demo.html',
  styleUrl: './product-video-demo.scss',
})
export class ProductVideoDemo {
  /** When false, shows the first frame without playing. */
  readonly animate = input(true);

  protected readonly t = inject(I18n).t;
  private readonly showcase = inject(ShowcaseStore);
  /** The Ivory Vow style, shown as the printed card behind the phone. */
  protected readonly card = computed(() => this.showcase.themes()[0]);
  protected readonly src = 'assets/videos/invitely-demo.mp4';

  private readonly video = viewChild.required<ElementRef<HTMLVideoElement>>('video');

  constructor() {
    afterNextRender(() => {
      const video = this.video().nativeElement;
      // Angular doesn't reliably reflect the `muted` attribute, and browsers only autoplay muted video.
      video.muted = true;

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!this.animate() || reducedMotion) return;

      video.play().catch(() => {
        // Autoplay blocked (e.g. data saver); the poster frame stays visible.
      });
    });
  }
}
