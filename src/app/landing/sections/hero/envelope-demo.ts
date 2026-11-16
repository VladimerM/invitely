import { Component, DestroyRef, afterNextRender, inject, input, signal } from '@angular/core';

import { PhoneFrame } from '../../../shared/ui/phone-frame/phone-frame';
import { CountdownTiles } from '../../../shared/ui/countdown-tiles/countdown-tiles';

/** 0 sealed · 1 flap open · 2 card raised · 3 invitation revealed. */
type EnvelopePhase = 0 | 1 | 2 | 3;

/** How long each phase is held before advancing, in ms. */
const PHASE_DURATIONS: Record<EnvelopePhase, number> = { 0: 1300, 1: 1000, 2: 1300, 3: 4200 };

/** Phone mock-up that loops an envelope opening into the finished invitation. */
@Component({
  selector: 'app-envelope-demo',
  imports: [PhoneFrame, CountdownTiles],
  templateUrl: './envelope-demo.html',
  styleUrl: './envelope-demo.scss',
})
export class EnvelopeDemo {
  protected readonly phase = signal<EnvelopePhase>(0);

  /** When false, shows the opened invitation without animating. */
  readonly animate = input(true);

  protected readonly weddingStartsAt = '2027-06-12T16:00';

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!this.animate() || reducedMotion) {
        this.phase.set(3);
        return;
      }

      let timer: ReturnType<typeof setTimeout>;
      const advance = () => {
        timer = setTimeout(() => {
          this.phase.update((phase) => ((phase + 1) % 4) as EnvelopePhase);
          advance();
        }, PHASE_DURATIONS[this.phase()]);
      };
      advance();
      destroyRef.onDestroy(() => clearTimeout(timer));
    });
  }
}
