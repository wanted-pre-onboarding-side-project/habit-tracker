import { WEEK_DAYS } from 'lib/constant/main';
import {
  getFormattedString,
  getEdgePointDate,
  getCalculatedDate,
} from 'lib/utils/date';

export const getWeekData = (date: Date) => {
  const startOfWeek = getEdgePointDate(date, 'TO_START_OF', 'week');
  return WEEK_DAYS.map((day, index) => ({
    label: day,
    date: getFormattedString(
      getCalculatedDate(startOfWeek, 'ADD', index, 'day'),
    ),
  }));
};
