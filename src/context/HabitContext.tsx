import { createContext, useContext, useEffect, useState } from 'react';
import {
  Habit,
  HabitCheckUpdateContent,
  HabitCreateContent,
  HabitDetailUpdateContent,
  HabitManager,
  HabitsResponse,
  Period,
} from '../service/HabitManager';

export interface HabitsState extends HabitsResponse, Period {
  lastDay: number;
  createHabit(content: HabitCreateContent): Promise<void>;
  deleteHabit(id: Habit['id']): Promise<void>;
  updateHabitDetail(content: HabitDetailUpdateContent): Promise<void>;
  updateHabitCheck(content: HabitCheckUpdateContent): Promise<void>;
}

const HabitContext = createContext<HabitsState | null>(null);

export const HabitProvider = ({
  children,
  habitManager,
}: {
  children: React.ReactNode;
  habitManager: HabitManager;
}) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const lastDay = new Date(year, month, 0).getDate();

  const [habits, setHabits] = useState<HabitsResponse['habits']>([]);
  const [checks, setChecks] = useState<HabitsResponse['checks']>({});

  const loadHabitData = async () => {
    const data = await habitManager.getHabits({ year, month });
    setHabits(data.habits);
    setChecks(data.checks);
  };

  useEffect(() => {
    loadHabitData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createHabit = async (content: HabitCreateContent) => {
    await habitManager.createHabit(content);
    loadHabitData();
  };
  const deleteHabit = async (id: Habit['id']) => {
    await habitManager.deleteHabit(id);
    loadHabitData();
  };
  const updateHabitDetail = async (content: HabitDetailUpdateContent) => {
    await habitManager.updateHabitDetail(content);
    loadHabitData();
  };
  const updateHabitCheck = async (content: HabitCheckUpdateContent) => {
    await habitManager.updateHabitCheck(content);
    loadHabitData();
  };

  return (
    <HabitContext.Provider
      value={{
        year,
        month,
        lastDay,
        habits,
        checks,
        createHabit,
        deleteHabit,
        updateHabitDetail,
        updateHabitCheck,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabitContext = () => {
  const habitContext = useContext(HabitContext);
  if (!habitContext)
    throw new Error(
      '<HabitContext.Provider> 내에서 useHabitContext를 사용해주세요',
    );
  return habitContext;
};
