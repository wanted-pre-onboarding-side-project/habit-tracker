import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  Day,
  HabitCheckChangeDataType,
  HabitCreateDataType,
  HabitService,
  HabitType,
} from '../service/types';
import { usePeriodValue, useToday } from './hooks/usePeriodContext';

const HabitContextProvider = ({
  children,
  habitService,
}: {
  children: React.ReactNode;
  habitService: HabitService;
}) => {
  const today = useToday();
  const period = usePeriodValue();

  const [habitsWithinPeriod, setHabitsWithinPeriod] = useState<HabitType[]>([]);
  const [todayHabits, setTodayHabits] = useState<HabitType[]>([]);

  const loadHabitsWithinPeriod = useCallback(
    ({
      startDate,
      endDate,
    }: { startDate: string; endDate: string } = period) => {
      const loadedHabitsInPeriod = habitService.getHabitsByPeriod(
        startDate,
        endDate,
      );
      setHabitsWithinPeriod(loadedHabitsInPeriod);
    },
    [habitService, period],
  );

  const loadTodayHabits = useCallback(() => {
    const todayDay = today.format('dd') as Day;
    const loadedTodayHabits = habitService.getHabitsByDay(todayDay);
    setTodayHabits(loadedTodayHabits);
  }, [habitService, today]);

  const loadHabits = useCallback(() => {
    loadTodayHabits();
    loadHabitsWithinPeriod();
  }, [loadHabitsWithinPeriod, loadTodayHabits]);

  useEffect(() => {
    loadHabits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const habitsInWeekValue = useMemo(() => {
    const sum = habitsWithinPeriod.reduce(
      ({ days, checks }, cur) => {
        return {
          days: days + cur.days.length,
          checks: checks + cur.checks.length,
        };
      },
      { days: 0, checks: 0 },
    );

    const percentage = Math.round((sum.checks / sum.days) * 100);

    return {
      habitsInWeek: habitsWithinPeriod,
      achievePercentage: percentage || 0,
    };
  }, [habitsWithinPeriod]);

  const actions = useMemo(
    () => ({
      addHabit: (habit: HabitCreateDataType) => {
        habitService.addHabit(habit);
        loadHabits();
      },
      changeHabitCheck: (checkChangeData: HabitCheckChangeDataType) => {
        habitService.changeHabitCheck(checkChangeData);
        loadHabits();
      },
      loadHabitsWithinPeriod,
    }),
    [habitService, loadHabits, loadHabitsWithinPeriod],
  );

  return (
    <HabitsActionContext.Provider value={actions}>
      <HabitsInWeekContext.Provider value={habitsInWeekValue}>
        <HabitsTodayContext.Provider value={todayHabits}>
          {children}
        </HabitsTodayContext.Provider>
      </HabitsInWeekContext.Provider>
    </HabitsActionContext.Provider>
  );
};

export default HabitContextProvider;

interface HabitsActionContextValue {
  addHabit: (habit: HabitCreateDataType) => void;
  changeHabitCheck: (changeData: HabitCheckChangeDataType) => void;
  loadHabitsWithinPeriod: ({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate: string;
  }) => void;
}

interface HabitsInWeekContextValue {
  habitsInWeek: HabitType[];
  achievePercentage: number;
}

export const HabitsInWeekContext =
  createContext<HabitsInWeekContextValue | null>(null);
export const HabitsTodayContext = createContext<HabitType[] | null>(null);
export const HabitsActionContext =
  createContext<HabitsActionContextValue | null>(null);
