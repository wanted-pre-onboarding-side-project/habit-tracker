import { isSameWeek } from 'lib/helpers/dateHelpers';
import type { Habit } from 'interface/main';

export const getAchieveRate = (item: Habit, selectedDate: Date) => {
  const achieveRate = { complete: 0, total: 0 };

  Object.entries(item.recordedDates)
    .filter(([date]) => isSameWeek(date, selectedDate))
    .forEach(([_, status]) => {
      achieveRate.total++;
      status === 'completed' && achieveRate.complete++;
    });

  return `${achieveRate.complete} / ${achieveRate.total}`;
};

export const getTotalAchieveRate = (habits: Habit[], selectedDate: Date) => {
  const achieveRate = { complete: 0, total: 0 };

  habits.forEach((habit) => {
    Object.entries(habit.recordedDates)
      .filter(([date]) => isSameWeek(date, selectedDate))
      .forEach(([_, status]) => {
        achieveRate.total++;
        status === 'completed' && achieveRate.complete++;
      });
  });

  return achieveRate.total === 0
    ? '0%'
    : `${Math.ceil((achieveRate.complete / achieveRate.total) * 100)}%`;
};
