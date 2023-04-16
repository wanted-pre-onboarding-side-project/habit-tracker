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
    dispatch({ type: 'loadAllHabits', period });
    // period가 없는 구조면 의존성 배열 비워둘 수 있다
    // 초기 데이터 불러올때 period가 꼭 필요할까?
    // 초기 데이터를 프로바이더 마운트시 불러와야 할까?
    // TODO: 주석으로 경고 끄지 않고 올바른 형태로 의존성배열 처리하기(마운트시 한번만 실행할 함수에서 period 사용하지 않는 형태로?)
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
