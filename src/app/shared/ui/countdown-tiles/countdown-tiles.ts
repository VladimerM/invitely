import { Component, computed, inject, input } from '@angular/core';

import { I18n } from '../../../core/i18n/i18n';
import { Clock } from '../../../core/time/clock';
import { countdownTo } from '../../../core/time/countdown';

/** Days / hours / minutes remaining until `target`, as three bordered tiles. Border colour: `--tile-border`. */
@Component({
  selector: 'app-countdown-tiles',
  template: `
    @let remaining = countdown();
    @let text = t().countdown;
    <div class="tile">
      <span class="value">{{ remaining.days }}</span><span class="unit">{{ text.days }}</span>
    </div>
    <div class="tile">
      <span class="value">{{ pad(remaining.hours) }}</span><span class="unit">{{ text.hours }}</span>
    </div>
    <div class="tile">
      <span class="value">{{ pad(remaining.minutes) }}</span><span class="unit">{{ text.minutes }}</span>
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
  protected readonly t = inject(I18n).t;

  /** ISO date-time to count down to. */
  readonly target = input.required<string>();
  readonly size = input<'compact' | 'regular'>('regular');

  protected readonly countdown = computed(() => countdownTo(this.target(), this.clock.now()));
  protected readonly ariaLabel = computed(() => {
    const { days, hours, minutes } = this.countdown();
    return this.t().countdown.label(days, hours, minutes);
  });

  protected pad(value: number): string {
    return String(value).padStart(2, '0');
  }
}
