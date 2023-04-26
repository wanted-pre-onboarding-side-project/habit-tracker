import {
  getEdgePointDate,
  getFormattedString,
  getCalculatedDate,
  compareDate,
} from 'lib/utils/dateUtils';

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

export const isSameWeek = (date1: Date, date2: Date) => {
  return compareDate(date1, 'isSame', date2, 'week');
};
