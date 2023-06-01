import React from 'react';
import useLocalStorageReducer from 'lib/hooks/useLocalStorageReducer';
import { HabitStateContext, HabitDispatchContext } from './HabitContext';
import type { Habit } from 'lib/types/main';

const reducer = (
  state: Habit[],
  action: { type: 'ADD' | 'UPDATE' | 'DELETE'; payload: Habit },
) => {
  const targetIdx = state.findIndex((item) => item.id === action.payload.id);
  const newState = [...state];

  switch (action.type) {
    case 'ADD':
      return newState.concat(action.payload);

    case 'UPDATE':
      newState.splice(targetIdx, 1, action.payload);
      return newState;

    case 'DELETE':
      return [...state.filter((_, idx) => idx !== targetIdx)];

    default:
      throw new Error('choose right action type');
  }
};

const HabitProvider = ({ children }: { children: React.ReactNode }) => {
  const { state, dispatch } = useLocalStorageReducer('HABIT_DATA', reducer);

  return (
    <HabitStateContext.Provider value={state}>
      <HabitDispatchContext.Provider value={dispatch}>
        {children}
      </HabitDispatchContext.Provider>
    </HabitStateContext.Provider>
  );
};

export default HabitProvider;
