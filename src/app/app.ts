import { Component } from '@angular/core';

import { LandingPage } from './landing/landing-page';

@Component({
  selector: 'app-root',
  imports: [LandingPage],
  template: '<app-landing-page />',
})
export class App {}
