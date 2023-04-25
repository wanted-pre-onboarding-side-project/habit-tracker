import React from 'react';
import { Habit } from 'interface/main';

export const HabitStateContext = React.createContext<Habit[]>([]);
export const HabitDispatchContext = React.createContext<React.Dispatch<{
  type: 'ADD' | 'UPDATE' | 'DELETE';
  payload: Habit;
}> | null>(null);

export const useHabitStateContext = () => React.useContext(HabitStateContext);
export const useHabitDispatchContext = () => {
  const context = React.useContext(HabitDispatchContext);

  if (!context)
    throw new Error('<HabitHandleContext.Provider>가 제공되지 않았습니다.');

  return context;
};
