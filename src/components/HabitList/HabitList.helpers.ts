import { WEEK_DAYS } from 'constant';
import {
  getFormattedString,
  getEdgePointDate,
  getCalculatedDate,
  compareDate,
} from 'lib/utils/dateUtils';

export const getWeekData = (date: Date) => {
  const startOfWeek = getEdgePointDate(date, 'TO_START_OF', 'week');
  return WEEK_DAYS.map((day, index) => ({
    label: day,
    date: getFormattedString(
      getCalculatedDate(startOfWeek, 'ADD', index, 'day'),
    ),
  }));
};

export const isSameWeek = (date1: Date, date2: Date) => {
  return compareDate(date1, 'isSame', date2, 'week');
};

export const isAfterDay = (date1: string | Date, date2: string | Date) => {
  return compareDate(date1, 'isAfter', date2, 'day');
};
