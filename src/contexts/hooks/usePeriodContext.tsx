import { PeriodActionContext, PeriodValueContext } from '../PeriodProvider';
import { useContextWithErrorHandling } from './useContextWithErrorHandling';

export const usePeriodValue = () => {
  return useContextWithErrorHandling(PeriodValueContext);
};

export const usePeriodAction = () => {
  return useContextWithErrorHandling(PeriodActionContext);
};
