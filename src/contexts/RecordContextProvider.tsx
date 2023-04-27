import { useState, useEffect, ReactNode, useMemo, useCallback } from 'react';
import { getLatestPeriod, getChangedPeriod } from 'lib/utils/dateUtils';
import useLocalStorageReducer from 'lib/hooks/useLocalStorageReducer';
import { recordReducer } from 'lib/reducers/recordReducer';
import { useHabitsContext } from './HabitContext';
import {
  PeriodContext,
  PeriodHandleContext,
  RecordContext,
  RecordHandleContext,
} from './RecordContext';
import type { Habit, Day, WeekRecord } from 'interface/main';

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

  const recordHandlers = useMemo(
    () => ({
      checkDay: (habitId: Habit['id'], day: Day) =>
        dispatch({ type: 'CHECK', value: { habitId, day } }),
      unCheckDay: (habitId: Habit['id'], day: Day) =>
        dispatch({ type: 'UN_CHECK', value: { habitId, day } }),
    }),
    [dispatch],
  );

  return (
    <PeriodContext.Provider value={period}>
      <PeriodHandleContext.Provider value={movePeriod}>
        <RecordContext.Provider value={records as WeekRecord[]}>
          <RecordHandleContext.Provider value={recordHandlers}>
            {children}
          </RecordHandleContext.Provider>
        </RecordContext.Provider>
      </PeriodHandleContext.Provider>
    </PeriodContext.Provider>
  );
};
