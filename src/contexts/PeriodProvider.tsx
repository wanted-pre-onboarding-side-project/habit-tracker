import { createContext, useMemo, useState } from 'react';
import { getThisWeekPeriodDateString } from '../helpers/dateUtil';

const PeriodContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [period, setPeriod] = useState<PeriodValueContextValue>(
    getThisWeekPeriodDateString(),
  );

  const actions = useMemo(
    () => ({
      changePeriod: (newPeriod: PeriodValueContextValue) => {
        setPeriod(newPeriod);
      },
    }),
    [],
  );
  return (
    <PeriodValueContext.Provider value={period}>
      <PeriodActionContext.Provider value={actions}>
        {children}
      </PeriodActionContext.Provider>
    </PeriodValueContext.Provider>
  );
};

export default PeriodContextProvider;

export interface PeriodValueContextValue {
  startDate: string;
  endDate: string;
}
interface PeriodActionContextValue {
  changePeriod: (newPeriod: PeriodValueContextValue) => void;
}

export const PeriodValueContext = createContext<PeriodValueContextValue | null>(
  null,
);

export const PeriodActionContext =
  createContext<PeriodActionContextValue | null>(null);
