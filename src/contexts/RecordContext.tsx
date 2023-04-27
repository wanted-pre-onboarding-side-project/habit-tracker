import { createContext, useContext } from 'react';
import type {
  PeriodContextType,
  PeriodHandleContextType,
} from 'interface/context';
import type { WeekRecord } from 'interface/main';

export const PeriodContext = createContext<PeriodContextType>(null);
export const PeriodHandleContext = createContext<PeriodHandleContextType>(null);
export const RecordContext = createContext<WeekRecord[]>([]);

export const usePeriodContext = () => {
  const context = useContext(PeriodContext);
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

export const useRecordContext = () => {
  const context = useContext(RecordContext);
  if (!context)
    throw new Error('<RecordContext.Provider>가 제공되지 않았습니다.');

  return context;
};
