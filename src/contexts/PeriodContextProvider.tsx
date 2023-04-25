import { useState, ReactNode, useCallback } from 'react';
import { getLatestPeriod, getChangedPeriod } from 'lib/utils/dateUtils';
import { PeriodStateContext, PeriodHandleContext } from './PeriodContext';

const PeriodProvider = ({ children }: { children: ReactNode }) => {
  const [period, setPeriod] = useState(getLatestPeriod());

  const movePrevPeriod = useCallback(() => {
    setPeriod(getChangedPeriod(period, 'prev'));
  }, [period]);
  const moveNextPeriod = useCallback(() => {
    setPeriod(getChangedPeriod(period, 'next'));
  }, [period]);

  return (
    <PeriodStateContext.Provider value={period}>
      <PeriodHandleContext.Provider value={{ movePrevPeriod, moveNextPeriod }}>
        {children}
      </PeriodHandleContext.Provider>
    </PeriodStateContext.Provider>
  );
};

export default PeriodProvider;
