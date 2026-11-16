import { TestBed } from '@angular/core/testing';

import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('renders the landing page headline', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const headline = (fixture.nativeElement as HTMLElement).querySelector('h1');
    expect(headline?.textContent).toContain('Elegant digital invitations');
  });
});
