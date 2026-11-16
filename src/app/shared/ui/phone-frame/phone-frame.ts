import { Component, input } from '@angular/core';

/**
 * Device mock-up with a rounded screen and camera notch. Projected content
 * fills the screen. Style hooks: `--phone-shadow`, `--screen-bg`.
 */
@Component({
  selector: 'app-phone-frame',
  template: `
    <div class="screen">
      <span class="notch" aria-hidden="true"></span>
      <ng-content />
    </div>
  `,
  styleUrl: './phone-frame.scss',
  host: { '[class.phone--large]': "size() === 'large'" },
})
export class PhoneFrame {
  readonly size = input<'regular' | 'large'>('regular');
}
