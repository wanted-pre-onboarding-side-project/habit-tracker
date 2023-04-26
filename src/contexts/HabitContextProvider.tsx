import React from 'react';
import { HabitStateContext, HabitDispatchContext } from './HabitContext';
import type { Habit } from 'interface/main';

const initialState: Habit[] =
  JSON.parse(localStorage.getItem('HABIT_DATA') || '') || [];

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
      throw new Error();
  }
};

const HabitProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  localStorage.setItem('HABIT_DATA', JSON.stringify(state));

  return (
    <HabitStateContext.Provider value={state}>
      <HabitDispatchContext.Provider value={dispatch}>
        {children}
      </HabitDispatchContext.Provider>
    </HabitStateContext.Provider>
  );
};

export default HabitProvider;
