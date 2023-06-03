import {
  getFormattedString,
  getCalculatedDate,
  getEdgePointDate,
  getUnitOfDate,
  compareDate,
} from 'lib/utils/date';
import { WEEK_DAYS } from 'lib/constant/main';

export const isSameWeek = (date1: Date | string, date2: Date | string) => {
  return compareDate(date1, 'isSame', date2, 'week');
};

export const isAfterDay = (date1: Date | string, date2: Date | string) => {
  return compareDate(date1, 'isAfter', date2, 'day');
};

export const isSameOrAfterDay = (
  date1: Date | string,
  date2: Date | string,
) => {
  return compareDate(date1, 'isSameOrAfter', date2, 'day');
};

export const getPeriod = (date: Date) => {
  const start = getFormattedString(
    getEdgePointDate(date, 'TO_START_OF', 'week'),
    'dddd, MMM D[일]',
  );
  const end = getFormattedString(
    getEdgePointDate(date, 'TO_END_OF', 'week'),
    'dddd, MMM D[일]',
  );

  return `${start} ~ ${end}`;
};

export const getWeekBeforeDate = (date: Date) => {
  return getCalculatedDate(date, 'SUBTRACT', 1, 'week');
};

export const getWeekAfterDate = (date: Date) => {
  return getCalculatedDate(date, 'ADD', 1, 'week');
};

export const getDayword = (date: Date) => {
  return (
    WEEK_DAYS[getUnitOfDate(date, 'day') - 1] ||
    WEEK_DAYS[6 - getUnitOfDate(date, 'day')]
  );
};

export const getRecordedDate = (date: Date) => {
  return getFormattedString(date);
};
