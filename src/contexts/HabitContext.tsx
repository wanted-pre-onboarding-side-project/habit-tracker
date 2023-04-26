import { createContext, useContext } from 'react';
import type {
  HabitContextType,
  HabitHandleContextType,
} from 'interface/context';

export const HabitContext = createContext<HabitContextType>([]);
export const HabitHandleContext = createContext<HabitHandleContextType>(null);

export const useHabitsContext = () => useContext(HabitContext);

export const useHabitsHandleContext = () => {
  const context = useContext(HabitHandleContext);

  if (!context)
    throw new Error('<HabitHandleContext.Provider>가 제공되지 않았습니다.');

  return context;
};
