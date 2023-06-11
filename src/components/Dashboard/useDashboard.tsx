import { useHabitStateContext } from 'contexts/HabitContext';
import { getDayword } from 'lib/helpers/date';
import { getRoutineByDate } from 'lib/helpers/habit';

const useDashboard = () => {
  const habits = useHabitStateContext();
  const todayHabits = habits.filter((habit) => {
    const todayDate = new Date();
    const routine = getRoutineByDate(habit.routineList, todayDate);
    return routine?.includes(getDayword(todayDate)) ? true : false;
  });

  return todayHabits;
};

export default useDashboard;
