import { useState, ReactNode, useCallback } from 'react';
import { getLatestPeriod, getChangedPeriod } from 'lib/utils/dateUtils';
import { PeriodContext, PeriodHandleContext } from './RecordContext';

export const RecordProvider = ({ children }: { children: ReactNode }) => {
  const [period, setPeriod] = useState(getLatestPeriod());

  const movePeriod = useCallback(
    (direction: 'prev' | 'next') => {
      setPeriod(getChangedPeriod(period, direction));
    },
    [period],
  );

  return (
    <PeriodContext.Provider value={period}>
      <PeriodHandleContext.Provider value={movePeriod}>
        {children}
      </PeriodHandleContext.Provider>
    </PeriodContext.Provider>
  );
};
