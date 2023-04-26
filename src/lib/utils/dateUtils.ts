import dayjs from 'dayjs';
import { PERIOD_CHANGE_OFFSET } from 'constant';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import type { Day } from 'interface/main';
import type { ObjectifiedDate } from 'interface/context';
dayjs.extend(isSameOrAfter);

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

const objectifyDate = (dateObj: dayjs.Dayjs): ObjectifiedDate => {
  return {
    origin: dateObj.toDate(),
    year: dateObj.get('year'),
    month: dateObj.get('month') + 1,
    date: dateObj.get('date'),
    day: dateObj.get('day'),
    dayWord: dayNumToWord(dateObj.get('day')),
    hour: dateObj.get('hour'),
    minute: dateObj.get('minute'),
    yyyymmdd: dateObj.format('YYYY-MM-DD'),
  };
};

export const getToday = () => {
  const now = dayjs(new Date());

  return objectifyDate(now);
};

export const getLatestPeriod = () => {
  const now = dayjs(new Date());
  const start = dayjs(now).startOf('week');
  const end = dayjs(now).endOf('week');

  return {
    start: objectifyDate(start),
    end: objectifyDate(end),
  };
};

export const getChangedPeriod = (
  { start, end }: { start: ObjectifiedDate; end: ObjectifiedDate },
  direction: 'prev' | 'next',
) => {
  if (direction === 'prev')
    return {
      start: objectifyDate(
        dayjs(start.origin).subtract(PERIOD_CHANGE_OFFSET, 'day'),
      ),
      end: objectifyDate(
        dayjs(end.origin).subtract(PERIOD_CHANGE_OFFSET, 'day'),
      ),
    };

  return {
    start: objectifyDate(dayjs(start.origin).add(PERIOD_CHANGE_OFFSET, 'day')),
    end: objectifyDate(dayjs(end.origin).add(PERIOD_CHANGE_OFFSET, 'day')),
  };
};

export const isLatestWeek = (currentPeriodEnd: ObjectifiedDate) => {
  const now = dayjs(new Date());
  const endDate = dayjs(currentPeriodEnd.origin);

  return endDate.isSameOrAfter(now);
};

export function getCurrentWeekDates(startDate: ObjectifiedDate) {
  return Array(7)
    .fill(0)
    .map((_, index) =>
      objectifyDate(dayjs(startDate.origin).add(index, 'day')),
    );
}

export function isFutureDate(targetDate: ObjectifiedDate) {
  const now = dayjs(new Date());
  const target = dayjs(targetDate.origin);
  return target.isAfter(now);
}
