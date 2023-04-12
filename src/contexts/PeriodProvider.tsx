import dayjs from 'dayjs';
import { createContext, useContext, useMemo, useState } from 'react';

interface PeriodValueContextValue {
  startDate: string;
  endDate: string;
}
interface PeriodActionContextValue {
  changePeriod: (newPeriod: PeriodValueContextValue) => void;
}

const TodayContext = createContext<dayjs.Dayjs | null>(null);

const PeriodValueContext = createContext<PeriodValueContextValue | null>(null);

const PeriodActionContext = createContext<PeriodActionContextValue | null>(
  null,
);

const PeriodContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [today] = useState(dayjs());
  const [period, setPeriod] = useState<PeriodValueContextValue>({
    startDate: today.weekday(0).format('YYYY-MM-DD'),
    endDate: today.weekday(6).format('YYYY-MM-DD'),
  });

  const actions = useMemo(
    () => ({
      changePeriod: (newPeriod: PeriodValueContextValue) => {
        console.log(newPeriod);
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
