import { createContext, useContext } from 'react';

export const PeriodStateContext = createContext<{
  selectedDate: Date;
  isLatestWeek: boolean;
  period: string;
} | null>(null);
export const PeriodHandleContext = createContext<{
  movePrevPeriod: () => void;
  moveNextPeriod: () => void;
} | null>(null);

export const usePeriodStateContext = () => {
  const context = useContext(PeriodStateContext);
  if (!context)
    throw new Error('<PeriodContext.Provider>가 제공되지 않았습니다.');

  return context;
};

export const usePeriodHandleContext = () => {
  const context = useContext(PeriodHandleContext);
  if (!context)
    throw new Error('<PeriodHandleContext.Provider>가 제공되지 않았습니다.');

  return context;
};
