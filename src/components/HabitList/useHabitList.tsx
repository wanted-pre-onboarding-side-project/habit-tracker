import {
  useHabitDispatchContext,
  useHabitStateContext,
} from 'contexts/HabitContext';
import { usePeriodStateContext } from 'contexts/PeriodContext';
import { Habit } from 'interface/main';
import { getWeekData, isAfterDay, isSameWeek } from './HabitList.helpers';

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

  return { weekData, habits, getTypeOfButton, toggleComplete };
};

export default useHabitList;
