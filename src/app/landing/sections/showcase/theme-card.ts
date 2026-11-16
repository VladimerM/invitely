import { Component, input, output } from '@angular/core';

import { InvitationTheme } from '../../models/invitation-theme';
import { Occasion } from '../../models/occasion';

/** Portfolio tile: a miniature invitation cover plus its name and occasion. */
@Component({
  selector: 'app-theme-card',
  templateUrl: './theme-card.html',
  styleUrl: './theme-card.scss',
  host: {
    '[style.--theme-bg]': 'theme().palette.background',
    '[style.--theme-ink]': 'theme().palette.ink',
    '[style.--theme-accent]': 'theme().palette.accent',
  },
})
export class ThemeCard {
  readonly theme = input.required<InvitationTheme>();
  readonly occasion = input.required<Occasion>();
  readonly view = output<void>();
}
