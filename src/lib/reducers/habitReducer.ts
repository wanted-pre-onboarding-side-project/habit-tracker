import { getLatestPeriod } from 'lib/utils/dateUtils';
import type { Habit } from 'interface/main';
import type { habitActionType } from 'interface/reducer';

export const habitReducer = (state: Habit[], action: habitActionType) => {
  switch (action.type) {
    case 'CREATE':
      return [
        ...state,
        {
          id: new Date().getTime(),
          ...action.value,
          createdAt: getLatestPeriod().start.origin.getTime(),
        },
      ];

    case 'UPDATE':
      return state.map((habit) => {
        if (habit.id !== action.value.id) return habit;
        else return action.value;
      });

    case 'DELETE':
      return state.filter((habit) => habit.id !== action.value);

    default:
      throw Error('정의 되지 않은 action type입니다.');
  }
};
