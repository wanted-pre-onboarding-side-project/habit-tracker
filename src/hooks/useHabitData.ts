import { useState } from 'react';
import { Habit } from '../interface/main';
import { NewHabit } from '../interface/props';

export const useHabitData = (): {
  habits: Habit[];
  addHabit: (newHabit: NewHabit) => void;
} => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const handleAddHabit = (newHabit: NewHabit) => {
    setHabits([
      ...habits,
      {
        id: habits.length < 1 ? 1 : habits[habits.length - 1].id + 1,
        name: newHabit.name,
        description: newHabit.description,
        days: newHabit.days,
      },
    ]);
  };

  return { habits, addHabit: handleAddHabit };
};
