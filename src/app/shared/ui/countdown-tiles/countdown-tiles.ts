import { Component, computed, inject, input } from '@angular/core';

import { Clock } from '../../../core/time/clock';
import { countdownTo } from '../../../core/time/countdown';

/** Days / hours / minutes remaining until `target`, as three bordered tiles. Border colour: `--tile-border`. */
@Component({
  selector: 'app-countdown-tiles',
  template: `
    @let remaining = countdown();
    <div class="tile">
      <span class="value">{{ remaining.days }}</span><span class="unit">days</span>
    </div>
    <div class="tile">
      <span class="value">{{ pad(remaining.hours) }}</span><span class="unit">hours</span>
    </div>
    <div class="tile">
      <span class="value">{{ pad(remaining.minutes) }}</span><span class="unit">min</span>
    </div>
  `,
  styleUrl: './countdown-tiles.scss',
  host: {
    role: 'timer',
    '[class.tiles--compact]': "size() === 'compact'",
    '[attr.aria-label]': 'ariaLabel()',
  },
})
export class CountdownTiles {
  private readonly clock = inject(Clock);

  /** ISO date-time to count down to. */
  readonly target = input.required<string>();
  readonly size = input<'compact' | 'regular'>('regular');

  protected readonly countdown = computed(() => countdownTo(this.target(), this.clock.now()));
  protected readonly ariaLabel = computed(() => {
    const { days, hours, minutes } = this.countdown();
    return `${days} days, ${hours} hours and ${minutes} minutes to go`;
  });

  protected pad(value: number): string {
    return String(value).padStart(2, '0');
  }
}
