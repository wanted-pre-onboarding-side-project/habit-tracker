import { useState, useEffect, ReactNode, useCallback } from 'react';
import { getLatestPeriod, getChangedPeriod } from 'lib/utils/dateUtils';
import useLocalStorageReducer from 'lib/hooks/useLocalStorageReducer';
import { recordReducer } from 'lib/reducers/recordReducer';
import { useHabitsContext } from './HabitContext';
import {
  PeriodContext,
  PeriodHandleContext,
  RecordContext,
} from './RecordContext';
import type { WeekRecord } from 'interface/main';

export const RecordProvider = ({ children }: { children: ReactNode }) => {
  const habits = useHabitsContext();
  const [period, setPeriod] = useState(getLatestPeriod());
  const { state: records, dispatch } = useLocalStorageReducer(
    'records',
    recordReducer,
  );

  const movePeriod = useCallback(
    (direction: 'prev' | 'next') => {
      setPeriod(getChangedPeriod(period, direction));
    },
    [period],
  );

  useEffect(() => {
    dispatch({ type: 'INIT', value: { habits } });
  }, [period, dispatch, habits]);

  return (
    <PeriodContext.Provider value={period}>
      <PeriodHandleContext.Provider value={movePeriod}>
        <RecordContext.Provider value={records as WeekRecord[]}>
          {children}
        </RecordContext.Provider>
      </PeriodHandleContext.Provider>
    </PeriodContext.Provider>
  );
};
