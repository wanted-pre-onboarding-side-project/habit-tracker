import { Habit } from 'interface/main';
import { habitActionType } from 'interface/reducer';

export const habitReducer = (state: Habit[], action: habitActionType) => {
  switch (action.type) {
    case 'CREATE':
      return [
        ...state,
        {
          id: state.length < 1 ? 0 : state[state.length - 1].id + 1,
          ...action.value,
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
