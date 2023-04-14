import { HabitType } from '../service/types';

/**
 * 주어진 habits 배열에서 달성률 계산
 * 달성률 = 체크한 개수(checks.length) / 체크해야 할 개수(days.length)
 * @param {HabitType[]} habits
 * @returns number 0 ~ 100 사이 정수
 */
export const calculateAchivementPercentage = (habits: HabitType[]) => {
  const sum = habits.reduce(
    ({ days, checks }, cur) => {
      return {
        days: days + cur.days.length,
        checks: checks + cur.checks.length,
      };
    },
    { days: 0, checks: 0 },
  );

  const percentage = Math.round((sum.checks / sum.days) * 100);

  return percentage || 0;
};
