import React, { createContext, useEffect, useMemo, useReducer } from 'react';
import { calculateAchivementPercentage } from '../helpers/calculateWeeklyAchievePercentage';
import { getReducer } from '../reducer/habitReducer';
import {
  HabitCheckChangeDataType,
  HabitCreateDataType,
  HabitService,
  HabitType,
} from '../service/types';
import { usePeriodValue } from './hooks/usePeriodContext';

const HabitContextProvider = ({
  children,
  habitService,
}: {
  children: React.ReactNode;
  habitService: HabitService;
}) => {
  const period = usePeriodValue();
  const reducer = getReducer(habitService);

  const [{ todayHabits, habitsWithinPeriod }, dispatch] = useReducer(reducer, {
    todayHabits: [],
    habitsWithinPeriod: [],
  });

  useEffect(() => {
    dispatch({ type: 'loadAllHabits' });
  }, []);

  const habitsInWeekValue = useMemo(() => {
    const percentage = calculateAchivementPercentage(habitsWithinPeriod);

    return {
      habitsInWeek: habitsWithinPeriod,
      achievePercentage: percentage || 0,
    };
  }, [habitsWithinPeriod]);

  const actions = useMemo(
    () => ({
      addHabit: (habit: HabitCreateDataType) => {
        dispatch({ type: 'add', habit });
        dispatch({ type: 'loadAllHabits', period });
      },
      changeHabitCheck: (checkChangeData: HabitCheckChangeDataType) => {
        dispatch({ type: 'changeCheck', data: checkChangeData });
        dispatch({ type: 'loadAllHabits', period });
      },
      loadHabitsWithinPeriod: (newPeriod: {
        startDate: string;
        endDate: string;
      }) => {
        dispatch({ type: 'loadHabitWithinPeriod', period: newPeriod });
      },
    }),
    [period],
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
