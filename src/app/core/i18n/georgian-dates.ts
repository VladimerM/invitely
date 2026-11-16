// Some browsers ship without Georgian locale data, and `Intl` then silently formats in
// English. These cover the formats the app uses, so Georgian dates never fall back.

const MONTHS = [
  'იანვარი',
  'თებერვალი',
  'მარტი',
  'აპრილი',
  'მაისი',
  'ივნისი',
  'ივლისი',
  'აგვისტო',
  'სექტემბერი',
  'ოქტომბერი',
  'ნოემბერი',
  'დეკემბერი',
];

/** Indexed by `Date.getDay()`: Sunday first. */
const WEEKDAYS = ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი'];

/** True when the runtime can format dates and relative times in Georgian itself. */
export function hasNativeGeorgian(): boolean {
  return (
    Intl.DateTimeFormat.supportedLocalesOf('ka').length > 0 &&
    Intl.RelativeTimeFormat.supportedLocalesOf('ka').length > 0
  );
}

/** "შაბათი, 12 ივნისი, 2027" / "1 მაისი", honouring which parts `options` asks for. */
export function formatGeorgianDate(date: Date, options: Intl.DateTimeFormatOptions): string {
  const dayMonth = [
    options.day ? String(date.getDate()) : '',
    options.month ? MONTHS[date.getMonth()] : '',
  ]
    .filter(Boolean)
    .join(' ');
  return [
    options.weekday ? WEEKDAYS[date.getDay()] : '',
    dayMonth,
    options.year ? String(date.getFullYear()) : '',
  ]
    .filter(Boolean)
    .join(', ');
}

/** "2 საათის წინ", "გუშინ", "3 დღის წინ" (Georgian nouns stay singular after numerals). */
export function formatGeorgianHoursAgo(hours: number): string {
  if (hours < 24) return `${hours} საათის წინ`;
  const days = Math.floor(hours / 24);
  return days === 1 ? 'გუშინ' : `${days} დღის წინ`;
}
