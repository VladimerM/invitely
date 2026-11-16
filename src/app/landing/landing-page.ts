import { Component, DOCUMENT, Injector, afterNextRender, inject } from '@angular/core';

import { LiveExampleDialog } from './live-example/live-example-dialog';
import { FaqSection } from './sections/faq/faq-section';
import { HeroSection } from './sections/hero/hero-section';
import { HowItWorksSection } from './sections/how-it-works/how-it-works-section';
import { IncludedSection } from './sections/included/included-section';
import { OrderSection } from './sections/order/order-section';
import { PricingSection } from './sections/pricing/pricing-section';
import { RsvpDemoSection } from './sections/rsvp-demo/rsvp-demo-section';
import { ShowcaseSection } from './sections/showcase/showcase-section';
import { SiteFooter } from './sections/site-footer/site-footer';
import { SiteHeader } from './sections/site-header/site-header';
import { TestimonialsSection } from './sections/testimonials/testimonials-section';
import { InvitationTheme } from './models/invitation-theme';
import { OrderStore } from './state/order-store';
import { ShowcaseStore } from './state/showcase-store';

/** Marketing landing page. Owns the feature stores shared between its sections. */
@Component({
  selector: 'app-landing-page',
  imports: [
    SiteHeader,
    HeroSection,
    ShowcaseSection,
    HowItWorksSection,
    IncludedSection,
    RsvpDemoSection,
    PricingSection,
    TestimonialsSection,
    FaqSection,
    OrderSection,
    SiteFooter,
    LiveExampleDialog,
  ],
  providers: [ShowcaseStore, OrderStore],
  templateUrl: './landing-page.html',
})
export class LandingPage {
  private readonly document = inject(DOCUMENT);
  private readonly injector = inject(Injector);

  protected readonly showcase = inject(ShowcaseStore);
  private readonly order = inject(OrderStore);

  /** Carries the open style into the order form and brings the form into view. */
  protected orderStyle(theme: InvitationTheme): void {
    this.order.chooseStyle(theme.name, this.showcase.occasionFor(theme));
    this.showcase.closeLive();

    // Wait for the dialog to unmount (and release its scroll lock) before scrolling.
    afterNextRender(
      () => this.document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' }),
      { injector: this.injector },
    );
  }
}
