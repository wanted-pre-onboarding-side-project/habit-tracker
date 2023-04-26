import dayjs from 'dayjs';
import type { Day, ObjectifiedDate } from 'interface/main';

const dayNumToWord = (dayNum: number): Day => {
  switch (dayNum) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
    default:
      throw new Error('dayjs의 day value가 0~6이 아닙니다.');
  }
};

export const objectifyDate = (dateObj: dayjs.Dayjs): ObjectifiedDate => {
  return {
    origin: dateObj.toDate(),
    year: dateObj.get('year'),
    month: dateObj.get('month') + 1,
    date: dateObj.get('date'),
    day: dateObj.get('day'),
    dayWord: dayNumToWord(dateObj.get('day')),
    hour: dateObj.get('hour'),
    minute: dateObj.get('minute'),
  };
};

export const getToday = () => {
  const now = dayjs(new Date());

  return objectifyDate(now);
};

export const getFormattedString = (date: Date, formatString?: string) => {
  return dayjs(date).format(formatString || 'YYYY-MM-DD');
};

export const getEdgePointDate = (
  date: Date,
  point: 'TO_START_OF' | 'TO_END_OF',
  unit: dayjs.ManipulateType,
) => {
  switch (point) {
    case 'TO_START_OF':
      return dayjs(date).startOf(unit).toDate();

    case 'TO_END_OF':
      return dayjs(date).endOf(unit).toDate();

    default:
      throw new Error('choose right point');
  }
};

export const getCalculatedDate = (
  date: Date,
  mode: 'ADD' | 'SUBTRACT',
  num: number,
  unit: dayjs.ManipulateType,
) => {
  switch (mode) {
    case 'ADD':
      return dayjs(date).add(num, unit).toDate();

    case 'SUBTRACT':
      return dayjs(date).subtract(num, unit).toDate();

    default:
      throw new Error('choose right calculation mode');
  }
};

export const compareDate = (
  dateSubject: Date | string,
  compare:
    | 'isSame'
    | 'isSameOrBefore'
    | 'isSameOrAfter'
    | 'isBefore'
    | 'isAfter',
  dateObject: Date | string,
  unit: dayjs.OpUnitType,
) => {
  switch (compare) {
    case 'isSame':
      return dayjs(dateSubject).isSame(dateObject, unit);

    case 'isSameOrBefore':
      return dayjs(dateSubject).isSameOrBefore(dateObject, unit);

    case 'isSameOrAfter':
      return dayjs(dateSubject).isSameOrAfter(dateObject, unit);

    case 'isBefore':
      return dayjs(dateSubject).isBefore(dateObject, unit);

    case 'isAfter':
      return dayjs(dateSubject).isAfter(dateObject, unit);

    default:
      throw new Error('choose right compare');
  }
};
