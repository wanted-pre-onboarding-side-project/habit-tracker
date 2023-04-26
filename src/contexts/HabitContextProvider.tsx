import { DAYS } from 'constant';
import { ReactNode, useMemo, useState } from 'react';
import { HabitContext, HabitHandleContext } from './HabitContext';
import type { Habit } from 'interface/main';

const dummy: Habit[] = Array(10)
  .fill(0)
  .map((val, idx) => ({
    id: idx,
    name: `습관 ${idx}`,
    description: `습관 ${idx} 설명`,
    days: idx > 5 ? DAYS : ['월', '화', '수', '목'],
  }));

export const HabitProvider = ({ children }: { children: ReactNode }) => {
  const [habits, setHabits] = useState<Habit[]>(dummy);

  const handlers = useMemo(
    () => ({
      handleCreateHabit: (newHabitContent: Omit<Habit, 'id'>) => {
        const newHabit: Habit = {
          id: habits.length < 1 ? 0 : habits[habits.length - 1].id + 1,
          ...newHabitContent,
        };
        setHabits([...structuredClone(habits), newHabit]);
      },
      handleDeleteHabit: (deleteHabitId: Habit['id']) => {
        setHabits((prev) => prev.filter((habit) => habit.id !== deleteHabitId));
      },
    }),
    [habits],
  );

  return (
    <HabitContext.Provider value={habits}>
      <HabitHandleContext.Provider value={handlers}>
        {children}
      </HabitHandleContext.Provider>
    </HabitContext.Provider>
  );
};
