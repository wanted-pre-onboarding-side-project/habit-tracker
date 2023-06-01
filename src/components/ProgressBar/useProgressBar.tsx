import { useHabitStateContext } from 'contexts/HabitContext';
import { usePeriodStateContext } from 'contexts/PeriodContext';
import { getTotalAchieveRate } from 'lib/helpers/habit';

const useProgressBar = () => {
  const habits = useHabitStateContext();
  const { selectedDate } = usePeriodStateContext();

  return getTotalAchieveRate(habits, selectedDate);
};

export default useProgressBar;
