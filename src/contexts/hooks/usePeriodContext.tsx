import { useContext } from 'react';
import {
  TodayContext,
  PeriodValueContext,
  PeriodActionContext,
} from '../PeriodProvider';

export const useToday = () => {
  const value = useContext(TodayContext);
  if (!value) {
    throw new Error('TodayContext.Provider 내부에서 사용해주세요');
  }
  return value;
};

export const usePeriodValue = () => {
  const value = useContext(PeriodValueContext);

  if (!value) {
    throw new Error('PeriodValueContext.Provider 내부에서 사용해주세요');
  }
  return value;
};

export const usePeriodAction = () => {
  const value = useContext(PeriodActionContext);

  if (!value) {
    throw new Error('PeriodActionContext.Provider 내부에서 사용해주세요');
  }
  return value;
};
