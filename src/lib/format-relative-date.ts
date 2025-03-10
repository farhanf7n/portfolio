import {
  formatDistanceToNowStrict,
  isToday,
  isTomorrow,
  isYesterday,
} from 'date-fns';

import { capitalize } from '@/lib/capitalize';

export interface FormatRelativeDateOptions {
  /**
   * Whether to simplify a date from today as "Today".
   */
  simplifyToday?: boolean;

  /**
   * Whether to simplify a date from tomorrow as "Tomorrow".
   */
  simplifyTomorrow?: boolean;

  /**
   * Whether to simplify a date from yesterday as "Yesterday".
   */
  simplifyYesterday?: boolean;
}

/**
 * Format a date relatively.
 *
 * @param date - The date to format.
 * @param [options] - A set of options.
 * @param [options.simplifyToday] - Whether to simplify a date from today as "Today".
 * @param [options.simplifyTomorrow] - Whether to simplify a date from tomorrow as "Tomorrow".
 * @param [options.simplifyYesterday] - Whether to simplify a date from yesterday as "Yesterday".
 */
export function formatRelativeDate(
  date: Date,
  {
    simplifyToday,
    simplifyYesterday,
    simplifyTomorrow,
  }: FormatRelativeDateOptions = {}
) {
  if (simplifyToday && isToday(date)) {
    return 'Today';
  } else if (simplifyTomorrow && isTomorrow(date)) {
    return 'Tomorrow';
  } else if (simplifyYesterday && isYesterday(date)) {
    return 'Yesterday';
  } else {
    return capitalize(formatDistanceToNowStrict(date, { addSuffix: true }));
  }
}
