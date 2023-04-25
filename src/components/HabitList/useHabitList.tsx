import {
  useHabitDispatchContext,
  useHabitStateContext,
} from 'contexts/HabitContext';
import { usePeriod } from 'contexts/RecordContext';
import dayjs from 'dayjs';
import { Habit } from 'interface/main';

const useHabitList = () => {
  const week = ['월', '화', '수', '목', '금', '토', '일'] as const;
  const habits = useHabitStateContext();
  const dispatch = useHabitDispatchContext();
  const period = usePeriod();
  const startOfWeek = dayjs(period.start.origin).startOf('week');
  const now = dayjs();
  const weekData = week.map((day, index) => ({
    label: day,
    date: startOfWeek.add(index, 'day').format('YYYY-MM-DD'),
  }));

  const getTypeOfButton = (item: Habit, day: (typeof weekData)[number]) => {
    if (
      dayjs(now).startOf('week').format('YYYY-MM-DD') ===
      startOfWeek.format('YYYY-MM-DD')
    ) {
      return item.routineDays.includes(day.label) ||
        item.recordedDates[day.date]
        ? dayjs(day.date).isSameOrBefore(now, 'day')
          ? item.recordedDates[day.date] === 'inactive'
            ? 'inactive'
            : 'completed'
          : 'future'
        : undefined;
    }

    return item.recordedDates[day.date]
      ? item.recordedDates[day.date] === 'inactive'
        ? 'inactive'
        : 'completed'
      : undefined;
  };

  const toggleComplete = (item: Habit, day: (typeof weekData)[number]) => {
    item.recordedDates[day.date] =
      item.recordedDates[day.date] === 'inactive' ? 'completed' : 'inactive';
    dispatch({ type: 'UPDATE', payload: item });
  };

  return { weekData, habits, getTypeOfButton, toggleComplete };
};

export default useHabitList;
