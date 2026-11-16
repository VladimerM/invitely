import { TestBed } from '@angular/core/testing';

import { App } from './app';
import { I18n } from './core/i18n/i18n';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  async function headlineIn(language: 'ka' | 'en' | 'ru'): Promise<string> {
    TestBed.inject(I18n).setLanguage(language);
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return (fixture.nativeElement as HTMLElement).querySelector('h1')?.textContent ?? '';
  }

  it('renders the landing page headline in English', async () => {
    expect(await headlineIn('en')).toContain('Elegant digital invitations');
  });

  it('renders the landing page headline in Georgian', async () => {
    expect(await headlineIn('ka')).toContain('ელეგანტური ციფრული მოსაწვევები');
  });

  it('renders the landing page headline in Russian', async () => {
    expect(await headlineIn('ru')).toContain('Элегантные онлайн-приглашения');
  });

  it('re-renders in place when the language changes', async () => {
    const i18n = TestBed.inject(I18n);
    i18n.setLanguage('en');
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    i18n.setLanguage('ru');
    await fixture.whenStable();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent).toContain('Элегантные');
    expect(document.documentElement.lang).toBe('ru');
  });
});
