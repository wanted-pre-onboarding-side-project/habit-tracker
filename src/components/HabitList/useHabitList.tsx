import {
  useHabitDispatchContext,
  useHabitStateContext,
} from 'contexts/HabitContext';
import { usePeriodStateContext } from 'contexts/PeriodContext';
import { isAfterDay } from 'lib/helpers/date';
import { getRoutineByDate } from 'lib/helpers/habit';
import { getWeekData } from './HabitList.helpers';
import type { Habit } from 'lib/types/main';

const useHabitList = () => {
  const habits = useHabitStateContext();
  const dispatch = useHabitDispatchContext();
  const { selectedDate } = usePeriodStateContext();
  const weekData = getWeekData(selectedDate);

  const getTypeOfButton = (item: Habit, day: (typeof weekData)[number]) => {
    if (item.completedDates.includes(day.date)) return 'completed';

    const routine = getRoutineByDate(item.routineList, day.date);
    const nowDate = new Date();

    if (!routine?.includes(day.label)) return undefined;
    if (isAfterDay(day.date, nowDate)) return 'future';
    return 'inactive';
  };

  const toggleComplete = (item: Habit, day: (typeof weekData)[number]) => {
    const completedDatesSet = new Set(item.completedDates);

    const newCompletedDates = completedDatesSet.delete(day.date)
      ? Array.from(completedDatesSet)
      : Array.from(completedDatesSet.add(day.date));

    dispatch({
      type: 'UPDATE',
      payload: { ...item, completedDates: newCompletedDates },
    });
  };

  // const getAchieveRate = (item: Habit) => {};

  return { weekData, habits, getTypeOfButton, toggleComplete };
};

export default useHabitList;
