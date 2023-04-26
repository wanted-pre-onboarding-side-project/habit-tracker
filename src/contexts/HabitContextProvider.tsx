import { useState, ReactNode, useCallback } from 'react';
import { DAYS } from 'constant';
import { HabitContext, HabitHandleContext } from './HabitContext';
import type { Habit } from 'interface/main';

const dummy: Habit[] = Array(10)
  .fill(0)
  .map((val, idx) => ({
    id: idx,
    name: `습관 ${idx}`,
    description: `습관 ${idx} 설명`,
    days: DAYS,
  }));

export const HabitProvider = ({ children }: { children: ReactNode }) => {
  const [habits, setHabits] = useState<Habit[]>(dummy);

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

  return (
    <HabitContext.Provider value={habits}>
      <HabitHandleContext.Provider value={handleCreateHabit}>
        {children}
      </HabitHandleContext.Provider>
    </HabitContext.Provider>
  );
};
