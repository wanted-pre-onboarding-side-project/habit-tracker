import { useState, ReactNode, useCallback, useEffect } from 'react';
import { getLatestPeriod, getChangedPeriod } from 'lib/utils/dateUtils';
import { Habit, HabitRecord } from 'interface/main';
import {
  PeriodContext,
  PeriodHandleContext,
  RecordsHandleContext,
  RecordsContext,
} from './RecordContext';

export const RecordProvider = ({ children }: { children: ReactNode }) => {
  const [period, setPeriod] = useState(getLatestPeriod());

  const movePeriod = useCallback(
    (direction: 'prev' | 'next') => {
      setPeriod(getChangedPeriod(period, direction));
    },
    [period],
  );

  const [records, setRecords] = useState<HabitRecord[]>([]);

  const handleChangeRecord = useCallback(
    ({
      id,
      date,
      type,
    }: {
      id: Habit['id'];
      date: string;
      type: 'mark' | 'unmark';
    }) => {
      setRecords((prev) => {
        const targetRecord = prev.find((prevItem) => prevItem.habitId === id);

        if (!targetRecord) {
          return [
            ...prev,
            { habitId: id, records: type === 'mark' ? [date] : [] },
          ];
        }

        return prev.map((prevItem) => {
          if (prevItem.habitId !== id) return prevItem;
          return {
            ...prevItem,
            records:
              type === 'mark'
                ? Array.from(new Set([...prevItem.records, date]))
                : prevItem.records.filter((d) => d !== date),
          };
        });
      });
    },
    [],
  );

  return (
    <PeriodContext.Provider value={period}>
      <PeriodHandleContext.Provider value={movePeriod}>
        <RecordsContext.Provider value={records}>
          <RecordsHandleContext.Provider value={handleChangeRecord}>
            {children}
          </RecordsHandleContext.Provider>
        </RecordsContext.Provider>
      </PeriodHandleContext.Provider>
    </PeriodContext.Provider>
  );
};
