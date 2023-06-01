import {
  useHabitDispatchContext,
  useHabitStateContext,
} from 'contexts/HabitContext';
import { usePeriodStateContext } from 'contexts/PeriodContext';
import { isAfterDay, isSameWeek } from 'lib/helpers/date';
import { getWeekData } from './HabitList.helpers';
import type { Habit } from 'lib/types/main';

const useHabitList = () => {
  const habits = useHabitStateContext();
  const dispatch = useHabitDispatchContext();
  const { selectedDate } = usePeriodStateContext();
  const weekData = getWeekData(selectedDate);

  const getTypeOfButton = (item: Habit, day: (typeof weekData)[number]) => {
    const nowDate = new Date();

    if (isSameWeek(selectedDate, nowDate)) {
      return (item.routineDays.includes(day.label) ||
        item.recordedDates[day.date]) &&
        isAfterDay(day.date, nowDate)
        ? 'future'
        : item.recordedDates[day.date];
    }

    return item.recordedDates[day.date];
  };

  const toggleComplete = (item: Habit, day: (typeof weekData)[number]) => {
    item.recordedDates[day.date] =
      item.recordedDates[day.date] === 'inactive' ? 'completed' : 'inactive';
    dispatch({ type: 'UPDATE', payload: item });
  };

  const getAchieveRate = (item: Habit) => {
    const achieveRate = { complete: 0, total: 0 };

    Object.entries(item.recordedDates)
      .filter(([date]) => isSameWeek(date, selectedDate))
      .forEach(([_, status]) => {
        achieveRate.total++;
        status === 'completed' && achieveRate.complete++;
      });

    return `${achieveRate.complete} / ${achieveRate.total}`;
  };

  return { weekData, habits, getTypeOfButton, getAchieveRate, toggleComplete };
};

export default useHabitList;
