import {
  PeriodActionContext,
  PeriodValueContext,
  TodayContext,
} from '../PeriodProvider';
import { useContextWithErrorHandling } from './useContextWithErrorHandling';

export const useToday = () => {
  return useContextWithErrorHandling(TodayContext);
};

export const usePeriodValue = () => {
  return useContextWithErrorHandling(PeriodValueContext);
};

export const usePeriodAction = () => {
  return useContextWithErrorHandling(PeriodActionContext);
};
