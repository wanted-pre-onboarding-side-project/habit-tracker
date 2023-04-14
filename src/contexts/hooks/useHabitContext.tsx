import {
  HabitsActionContext,
  HabitsInWeekContext,
  HabitsTodayContext,
} from '../HabitContextProvider';
import { useContextWithErrorHandling } from './useContextWithErrorHandling';

export const useHabitsInWeek = () => {
  return useContextWithErrorHandling(HabitsInWeekContext);
};

export const useHabitsToday = () => {
  return useContextWithErrorHandling(HabitsTodayContext);
};

export const useHabitsAction = () => {
  return useContextWithErrorHandling(HabitsActionContext);
};
