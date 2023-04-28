import { WeekRecord } from 'interface/main';

const countCheckedDays = (checkedDays: WeekRecord['checkedDays'] = {}) => {
  return Object.values(checkedDays).filter((isTrue) => Boolean(isTrue)).length;
};

const countTotalDays = (checkedDays: WeekRecord['checkedDays'] = {}) => {
  return Object.keys(checkedDays).length;
};

export const getAcheiveRecord = (
  checkedDays: WeekRecord['checkedDays'],
): { checked: number; total: number } => ({
  checked: countCheckedDays(checkedDays),
  total: countTotalDays(checkedDays),
});

export const getAcheiveRecords = (
  records: WeekRecord[],
): { checked: number; total: number } =>
  !records.length
    ? { checked: 0, total: 1 }
    : records.reduce(
        (prev, { checkedDays }) => {
          return {
            checked: prev.checked + countCheckedDays(checkedDays),
            total: prev.total + countTotalDays(checkedDays),
          };
        },
        { checked: 0, total: 0 },
      );
