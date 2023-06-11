import { isSameOrAfterDay, isAfterDay } from 'lib/helpers/date';
import type { Habit, WeekData } from 'lib/types/main';

export const getRoutineByDate = (
  routineList: Habit['routineList'],
  date?: string | Date,
) => {
  const correctDate = Object.keys(routineList)
    .filter((updatedDate) => isSameOrAfterDay(date || new Date(), updatedDate))
    .at(-1) as string;

  return routineList[correctDate];
};

export const getAchieveRate = (habit: Habit, weekData: WeekData) => {
  const achieveRate = { completed: 0, total: 0 };

  weekData.forEach((day) => {
    const routine = getRoutineByDate(habit.routineList, day.date);
    const nowDate = new Date();
    if (habit.completedDates.includes(day.date)) {
      achieveRate.completed++;
      achieveRate.total++;
    } else if (!routine?.includes(day.label)) {
      achieveRate.total++;
      achieveRate.total--;
    } else if (isAfterDay(day.date, nowDate)) {
      achieveRate.total++;
    } else {
      achieveRate.total++;
    }
  });
  return `${achieveRate.completed} / ${achieveRate.total}`;
};

export const getTotalAchieveRate = (habits: Habit[], weekData: WeekData) => {
  const achieveRate = { completed: 0, total: 0 };

  habits.forEach((habit) => {
    weekData.forEach((day) => {
      const routine = getRoutineByDate(habit.routineList, day.date);
      const nowDate = new Date();
      if (habit.completedDates.includes(day.date)) {
        achieveRate.completed++;
        achieveRate.total++;
      } else if (!routine?.includes(day.label)) {
        achieveRate.total++;
        achieveRate.total--;
      } else if (isAfterDay(day.date, nowDate)) {
        achieveRate.total++;
      } else {
        achieveRate.total++;
      }
    });
  });

  return achieveRate.total === 0
    ? '0%'
    : `${Math.ceil((achieveRate.completed / achieveRate.total) * 100)}%`;
};
