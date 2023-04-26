import { compareDate } from 'lib/utils/dateUtils';

export const isSameWeek = (date1: Date | string, date2: Date | string) => {
  return compareDate(date1, 'isSame', date2, 'week');
};
