import { useState, ReactNode, useCallback } from 'react';
import { HabitContext, HabitHandleContext } from './HabitContext';
import type { Habit } from 'interface/main';

export const HabitProvider = ({ children }: { children: ReactNode }) => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const handleCreateHabit = useCallback(
    (newHabitContent: Omit<Habit, 'id'>) => {
      const newHabit: Habit = {
        id: habits.length < 1 ? 0 : habits[habits.length - 1].id + 1,
        ...newHabitContent,
      };
      setHabits([...structuredClone(habits), newHabit]);
    },
    [habits],
  );

  const handleUpdateHabit = useCallback(
    (updatingHabitContent: Habit) => {
      const updatedHabits = habits.map((habit) => {
        if (habit.id !== updatingHabitContent.id) return habit;
        else return updatingHabitContent;
      });
      setHabits(updatedHabits);
    },
    [habits],
  );

  //  TODO: useReducer
  const habitHandlers = {
    createHabit: handleCreateHabit,
    updateHabit: handleUpdateHabit,
  };

  return (
    <HabitContext.Provider value={habits}>
      <HabitHandleContext.Provider value={habitHandlers}>
        {children}
      </HabitHandleContext.Provider>
    </HabitContext.Provider>
  );
};
