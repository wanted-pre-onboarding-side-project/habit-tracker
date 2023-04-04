import { createContext, useMemo } from 'react';
import { Period } from '../service/HabitManager';

export interface PeriodState extends Period {
  lastDay: number;
}

export const PeriodContext = createContext<PeriodState | null>(null);

const today = new Date();

export const PeriodProvider = ({ children }: { children: React.ReactNode }) => {
  const year = useMemo(() => today.getFullYear(), []);
  const month = useMemo(() => today.getMonth() + 1, []);
  const lastDay = useMemo(
    () => new Date(year, month, 0).getDate(),
    [month, year],
  );

  return (
    <PeriodContext.Provider
      value={{
        year,
        month,
        lastDay,
      }}
    >
      {children}
    </PeriodContext.Provider>
  );
};
