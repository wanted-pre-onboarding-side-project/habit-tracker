import { createContext, useCallback, useEffect, useState } from 'react';
import { usePeriodContext } from '../hooks/usePeriodContext';
import {
  Habit,
  HabitCheckUpdateContent,
  HabitCreateContent,
  HabitDetailUpdateContent,
  HabitManager,
  HabitsResponse,
} from '../service/HabitManager';

export interface HabitActions {
  createHabit(content: HabitCreateContent): Promise<void>;
  deleteHabit(id: Habit['id']): Promise<void>;
  updateHabitDetail(content: HabitDetailUpdateContent): Promise<void>;
  updateHabitCheck(content: HabitCheckUpdateContent): Promise<void>;
}

export const HabitActionContext = createContext<HabitActions | null>(null);
export const HabitValueContext = createContext<HabitsResponse | null>(null);

export const HabitProvider = ({
  children,
  habitManager,
}: {
  children: React.ReactNode;
  habitManager: HabitManager;
}) => {
  const { year, month } = usePeriodContext();
  const [habits, setHabits] = useState<HabitsResponse['habits']>([]);
  const [checks, setChecks] = useState<HabitsResponse['checks']>({});

  const loadHabitData = useCallback(async () => {
    const data = await habitManager.getHabits({ year, month });
    setHabits(data.habits);
    setChecks(data.checks);
  }, [habitManager, month, year]);

  useEffect(() => {
    loadHabitData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createHabit = useCallback(
    async (content: HabitCreateContent) => {
      await habitManager.createHabit(content);
      loadHabitData();
    },
    [habitManager, loadHabitData],
  );

  const deleteHabit = useCallback(
    async (id: Habit['id']) => {
      await habitManager.deleteHabit(id);
      loadHabitData();
    },
    [habitManager, loadHabitData],
  );

  const updateHabitDetail = useCallback(
    async (content: HabitDetailUpdateContent) => {
      await habitManager.updateHabitDetail(content);
      loadHabitData();
    },
    [habitManager, loadHabitData],
  );
  const updateHabitCheck = useCallback(
    async (content: HabitCheckUpdateContent) => {
      await habitManager.updateHabitCheck(content);
      loadHabitData();
    },
    [habitManager, loadHabitData],
  );

  return (
    <HabitActionContext.Provider
      value={{ createHabit, deleteHabit, updateHabitDetail, updateHabitCheck }}
    >
      <HabitValueContext.Provider
        value={{
          habits,
          checks,
        }}
      >
        {children}
      </HabitValueContext.Provider>
    </HabitActionContext.Provider>
  );
};
