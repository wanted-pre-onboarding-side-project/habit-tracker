import { useState } from 'react';
import { Habit } from '../interface/main';
import { NewHabit } from '../interface/props';

export const useHabitData = (): {
  habits: Habit[];
  createHabit: (newHabit: NewHabit) => void;
  deleteHabit: (id: Habit['id']) => void;
} => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const handleCreateHabit = (newHabit: NewHabit) => {
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

  const handleDeleteHabit = (id: Habit['id']) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return {
    habits,
    createHabit: handleCreateHabit,
    deleteHabit: handleDeleteHabit,
  };
};
