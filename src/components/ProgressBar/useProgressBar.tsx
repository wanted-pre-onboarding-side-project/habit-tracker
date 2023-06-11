import { useHabitStateContext } from 'contexts/HabitContext';
import { usePeriodStateContext } from 'contexts/PeriodContext';
import { getTotalAchieveRate } from 'lib/helpers/habit';
import { getWeekData } from 'lib/helpers/date';

const useProgressBar = () => {
  const habits = useHabitStateContext();
  const { selectedDate } = usePeriodStateContext();
  const weekData = getWeekData(selectedDate);

  return getTotalAchieveRate(habits, weekData);
};

export default useProgressBar;
