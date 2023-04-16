import {
  getDayOfToday,
  getThisWeekPeriodDateString,
} from '../helpers/dateUtil';
import {
  HabitCheckChangeDataType,
  HabitCreateDataType,
  HabitService,
  HabitType,
} from '../service/types';

// TODO: reducer 타입 정리 필요
type TempPeriod = {
  startDate: string;
  endDate: string;
};

type StateType = { todayHabits: HabitType[]; habitsWithinPeriod: HabitType[] };

type AddActionType = { type: 'add'; habit: HabitCreateDataType };
type CheckChangeActionType = {
  type: 'changeCheck';
  data: HabitCheckChangeDataType;
};
type LoadOnlyHabitsWithinPeriodActionType = {
  type: 'loadHabitWithinPeriod';
  period: TempPeriod;
};
type LoadAllHabitsActionType = { type: 'loadAllHabits'; period?: TempPeriod };
type ActionType =
  | AddActionType
  | CheckChangeActionType
  | LoadOnlyHabitsWithinPeriodActionType
  | LoadAllHabitsActionType;

// provider에서 주입받는 habitService 사용하기 위해 리듀서를 리턴하는 함수를 만듦
export function getReducer(habitService: HabitService) {
  const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
      case 'add': {
        habitService.addHabit(action.habit);
        return state;
      }
      case 'changeCheck': {
        habitService.changeHabitCheck(action.data);
        return state;
      }
      case 'loadHabitWithinPeriod': {
        const { startDate, endDate } = action.period;
        const loadedHabitsInPeriod = habitService.getHabitsByPeriod(
          startDate,
          endDate,
        );
        return { ...state, habitsWithinPeriod: loadedHabitsInPeriod };
      }
      case 'loadAllHabits': {
        const dayOfToday = getDayOfToday();
        const loadedTodayHabits = habitService.getHabitsByDay(dayOfToday);

        const period = action.period ?? getThisWeekPeriodDateString();

        const loadedHabitsInPeriod = habitService.getHabitsByPeriod(
          period.startDate,
          period.endDate,
        );

        return {
          habitsWithinPeriod: loadedHabitsInPeriod,
          todayHabits: loadedTodayHabits,
        };
      }
      default: {
        return state;
      }
    }
  };
  return reducer;
}
