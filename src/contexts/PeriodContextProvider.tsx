import { useState, ReactNode, useCallback } from 'react';
import {
  getPeriod,
  getWeekBeforeDate,
  getWeekAfterDate,
  isSameWeek,
} from './PeriodContext.helpers';
import { PeriodStateContext, PeriodHandleContext } from './PeriodContext';

const PeriodProvider = ({ children }: { children: ReactNode }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const period = getPeriod(selectedDate);
  const isLatestWeek = isSameWeek(selectedDate, new Date());

  const movePrevPeriod = useCallback(() => {
    setSelectedDate(getWeekBeforeDate(selectedDate));
  }, [selectedDate]);
  const moveNextPeriod = useCallback(() => {
    setSelectedDate(getWeekAfterDate(selectedDate));
  }, [selectedDate]);

  return (
    <PeriodStateContext.Provider value={{ selectedDate, isLatestWeek, period }}>
      <PeriodHandleContext.Provider value={{ movePrevPeriod, moveNextPeriod }}>
        {children}
      </PeriodHandleContext.Provider>
    </PeriodStateContext.Provider>
  );
};

export default PeriodProvider;
