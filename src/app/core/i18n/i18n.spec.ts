import { TestBed } from '@angular/core/testing';

import { I18n } from './i18n';
import { formatGeorgianDate, formatGeorgianHoursAgo } from './georgian-dates';
import { matchBrowserLanguage } from './language';

describe('matchBrowserLanguage', () => {
  it('matches on the base language tag', () => {
    expect(matchBrowserLanguage(['ru-RU', 'en'])).toBe('ru');
    expect(matchBrowserLanguage(['KA'])).toBe('ka');
  });

  it('skips unsupported languages and returns null when none match', () => {
    expect(matchBrowserLanguage(['de-DE', 'en-US'])).toBe('en');
    expect(matchBrowserLanguage(['fr', 'de'])).toBeNull();
  });
});

describe('I18n', () => {
  it('remembers the chosen language for the next visit', () => {
    TestBed.inject(I18n).setLanguage('ru');

    TestBed.resetTestingModule();
    expect(TestBed.inject(I18n).language()).toBe('ru');
  });

  it('formats dates in the active locale', () => {
    const i18n = TestBed.inject(I18n);
    i18n.setLanguage('en');
    expect(i18n.formatDate('2027-05-01', { day: 'numeric', month: 'long' })).toBe('1 May');

    i18n.setLanguage('ru');
    expect(i18n.formatDate('2027-05-01', { day: 'numeric', month: 'long' })).toBe('1 мая');
  });

  it('describes reply times relative to now', () => {
    const i18n = TestBed.inject(I18n);
    i18n.setLanguage('en');
    expect(i18n.formatHoursAgo(0)).toBe('Just now');
    expect(i18n.formatHoursAgo(2)).toBe('2 hours ago');
    expect(i18n.formatHoursAgo(26)).toBe('yesterday');
  });
});

describe('Georgian date fallback', () => {
  it('formats full and day-month dates in Georgian', () => {
    const date = new Date('2027-06-12T16:00');
    expect(
      formatGeorgianDate(date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
    ).toBe('შაბათი, 12 ივნისი, 2027');
    expect(formatGeorgianDate(date, { day: 'numeric', month: 'long' })).toBe('12 ივნისი');
  });

  it('describes reply times in Georgian', () => {
    expect(formatGeorgianHoursAgo(2)).toBe('2 საათის წინ');
    expect(formatGeorgianHoursAgo(26)).toBe('გუშინ');
    expect(formatGeorgianHoursAgo(50)).toBe('2 დღის წინ');
  });
});
