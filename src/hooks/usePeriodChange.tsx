import { useHabitsAction } from '../contexts/hooks/useHabitContext';
import {
  usePeriodAction,
  usePeriodValue,
} from '../contexts/hooks/usePeriodContext';
import {
  getDateStringAWeekAfter,
  getDateStringAWeekBefore,
  getTodayDateString,
  isDateBetween,
} from '../helpers/dateUtil';

const usePeriodChange = () => {
  const period = usePeriodValue();
  const { changePeriod } = usePeriodAction();
  const { loadHabitsWithinPeriod } = useHabitsAction();

  const moveToPrevWeek = () => {
    const startDate = getDateStringAWeekBefore(period.startDate);
    const endDate = getDateStringAWeekBefore(period.endDate);

    changePeriod({ startDate, endDate });
    loadHabitsWithinPeriod({ startDate, endDate });
  };

  const today = getTodayDateString();
  const isDisabledToMoveNextWeek = isDateBetween(today, {
    start: period.startDate,
    end: period.endDate,
  });

  const moveToNextWeek = () => {
    if (isDisabledToMoveNextWeek) return;
    const startDate = getDateStringAWeekAfter(period.startDate);
    const endDate = getDateStringAWeekAfter(period.endDate);

    changePeriod({ startDate, endDate });
    loadHabitsWithinPeriod({ startDate, endDate });
  };

  return {
    moveToPrevWeek,
    moveToNextWeek,
    isDisabledToMoveNextWeek,
  };
};

export default usePeriodChange;
