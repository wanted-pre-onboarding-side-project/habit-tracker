import dayjs from 'dayjs';

export const getUnitOfDate = (date: Date, unit: dayjs.UnitType) => {
  return dayjs(date).get(unit);
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
