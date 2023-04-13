import { useContext } from 'react';
import {
  HabitsInWeekContext,
  HabitsTodayContext,
  HabitsActionContext,
} from '../HabitContextProvider';

export const useHabitsInWeek = () => {
  const value = useContext(HabitsInWeekContext);
  if (!value) {
    throw new Error('HabitsInWeekContext.Provider 내부에서 사용해주세요');
  }
  return value;
};

export const useHabitsToday = () => {
  const value = useContext(HabitsTodayContext);
  if (!value) {
    throw new Error('HabitsTodayContext.Provider 내부에서 사용해주세요');
  }
  return value;
};

export const useHabitsAction = () => {
  const value = useContext(HabitsActionContext);
  if (!value) {
    throw new Error('HabitsActionContext.Provider 내부에서 사용해주세요');
  }
  return value;
};
