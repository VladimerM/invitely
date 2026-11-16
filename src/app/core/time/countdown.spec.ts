import { countdownTo } from './countdown';

describe('countdownTo', () => {
  const now = new Date('2027-06-10T12:30:00').getTime();

  it('splits the remaining time into days, hours and minutes', () => {
    expect(countdownTo('2027-06-12T16:00', now)).toEqual({ days: 2, hours: 3, minutes: 30 });
  });

  it('returns zeros once the target has passed', () => {
    expect(countdownTo('2027-06-01T00:00', now)).toEqual({ days: 0, hours: 0, minutes: 0 });
  });
});
