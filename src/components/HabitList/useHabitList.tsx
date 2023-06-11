import {
  useHabitDispatchContext,
  useHabitStateContext,
} from 'contexts/HabitContext';
import { usePeriodStateContext } from 'contexts/PeriodContext';
import { isAfterDay, getWeekData } from 'lib/helpers/date';
import { getRoutineByDate, getAchieveRate } from 'lib/helpers/habit';
import type { Habit } from 'lib/types/main';

const useHabitList = () => {
  const habits = useHabitStateContext();
  const dispatch = useHabitDispatchContext();
  const { selectedDate } = usePeriodStateContext();
  const weekData = getWeekData(selectedDate);

  const getButtonData = (habit: Habit, day: (typeof weekData)[number]) => {
    const routine = getRoutineByDate(habit.routineList, day.date);
    const nowDate = new Date();
    const toggle = () => toggleComplete(habit, day.date);

    if (habit.completedDates.includes(day.date))
      return { type: 'completed', disabled: false, toggle };
    if (!routine?.includes(day.label))
      return { type: undefined, disabled: true, toggle };
    if (isAfterDay(day.date, nowDate))
      return { type: 'future', disabled: true, toggle };
    return { type: 'inactive', disabled: false, toggle };
  };

  const toggleComplete = (habit: Habit, date: string) => {
    const completedDatesSet = new Set(habit.completedDates);

    const newCompletedDates = completedDatesSet.delete(date)
      ? Array.from(completedDatesSet)
      : Array.from(completedDatesSet.add(date));

    dispatch({
      type: 'UPDATE',
      payload: { ...habit, completedDates: newCompletedDates },
    });
  };

  const habitsData = habits.map((habit) => {
    const buttonData = weekData.map((day) => getButtonData(habit, day));
    const achieveRate = getAchieveRate(habit, weekData);

    return { ...habit, buttonData, achieveRate };
  });

  return { weekData, habitsData };
};

export default useHabitList;
