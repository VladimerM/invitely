import { Component, booleanAttribute, input } from '@angular/core';

export type EyebrowTone = 'muted' | 'gold' | 'taupe';

/** Small uppercase kicker above section headlines, led by a gold rule. */
@Component({
  selector: 'app-eyebrow',
  template: `
    <span class="rule" aria-hidden="true"></span>
    <ng-content />
    @if (centered()) {
      <span class="rule" aria-hidden="true"></span>
    }
  `,
  styles: `
    :host {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 12px;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: var(--color-muted);
    }

    :host([data-tone='gold']) {
      color: var(--color-gold);
    }

    :host([data-tone='taupe']) {
      color: var(--color-taupe);
    }

    .rule {
      flex: none;
      width: 32px;
      height: 1px;
      background: var(--color-gold);
    }
  `,
  host: { '[attr.data-tone]': 'tone()' },
})
export class Eyebrow {
  readonly tone = input<EyebrowTone>('muted');
  /** Adds a trailing rule so the label sits centred between two lines. */
  readonly centered = input(false, { transform: booleanAttribute });
}
