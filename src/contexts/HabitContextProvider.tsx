import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { usePeriodValue, useToday } from './PeriodProvider';

export type Day = '월' | '화' | '수' | '목' | '금' | '토' | '일';
export interface HabitType {
  id: number;
  name: string;
  description: string;
  days: Day[];
  checks: string[]; // yyyy-mm-dd string
}

export type HabitCreateDataType = Pick<
  HabitType,
  'name' | 'description' | 'days'
>;
export type HabitCheckChangeDataType = {
  id: HabitType['id'];
  date: string;
  value: boolean;
};

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

const HabitsInWeekContext = createContext<HabitsInWeekContextValue | null>(
  null,
);
const HabitsTodayContext = createContext<HabitType[] | null>(null);
const HabitsActionContext = createContext<HabitsActionContextValue | null>(
  null,
);

export interface HabitService {
  getHabitsByPeriod: (startDate: string, endDate: string) => HabitType[];
  getHabitsByDay: (day: Day) => HabitType[];
  addHabit: (habit: HabitCreateDataType) => void;
  changeHabitCheck: ({ id, date, value }: HabitCheckChangeDataType) => void;
}

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
      console.log(loadedHabitsInPeriod);
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

    console.log(sum, percentage);

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

export const useHabitsInWeek = () => {
  const value = useContext(HabitsInWeekContext);
  if (!value) {
    throw new Error('HabitsInWeekContext.Provider 내부에서 사용해주세요');
  }
  return value;
};

export const useHabitsToday = () => {
  const value = useContext(HabitsTodayContext);
  if (!value) {
    throw new Error('HabitsTodayContext.Provider 내부에서 사용해주세요');
  }
  return value;
};

export const useHabitsAction = () => {
  const value = useContext(HabitsActionContext);
  if (!value) {
    throw new Error('HabitsActionContext.Provider 내부에서 사용해주세요');
  }
  return value;
};
