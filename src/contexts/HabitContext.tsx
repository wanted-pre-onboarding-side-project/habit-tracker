import { useContext, createContext } from 'react';
import type { Habit } from 'lib/types/main';

export const HabitStateContext = createContext<Habit[]>([]);
export const HabitDispatchContext = createContext<React.Dispatch<{
  type: 'ADD' | 'UPDATE' | 'DELETE';
  payload: Habit;
}> | null>(null);

export const useHabitStateContext = () => useContext(HabitStateContext);
export const useHabitDispatchContext = () => {
  const context = useContext(HabitDispatchContext);

  if (!context)
    throw new Error('<HabitHandleContext.Provider>가 제공되지 않았습니다.');

  return context;
};
