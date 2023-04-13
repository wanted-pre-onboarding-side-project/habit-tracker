import dayjs from 'dayjs';
import { createContext, useMemo, useState } from 'react';

const PeriodContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [today] = useState(dayjs());
  const [period, setPeriod] = useState<PeriodValueContextValue>({
    startDate: today.weekday(0).format('YYYY-MM-DD'),
    endDate: today.weekday(6).format('YYYY-MM-DD'),
  });

  const actions = useMemo(
    () => ({
      changePeriod: (newPeriod: PeriodValueContextValue) => {
        setPeriod(newPeriod);
      },
    }),
    [],
  );
  return (
    <TodayContext.Provider value={today}>
      <PeriodValueContext.Provider value={period}>
        <PeriodActionContext.Provider value={actions}>
          {children}
        </PeriodActionContext.Provider>
      </PeriodValueContext.Provider>
    </TodayContext.Provider>
  );
};

export default PeriodContextProvider;

interface PeriodValueContextValue {
  startDate: string;
  endDate: string;
}
interface PeriodActionContextValue {
  changePeriod: (newPeriod: PeriodValueContextValue) => void;
}

export const TodayContext = createContext<dayjs.Dayjs | null>(null);

export const PeriodValueContext = createContext<PeriodValueContextValue | null>(
  null,
);

export const PeriodActionContext =
  createContext<PeriodActionContextValue | null>(null);
