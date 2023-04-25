import React from 'react';
import { HabitStateContext, HabitDispatchContext } from './HabitContext';
import type { Habit } from 'interface/main';

const initialState: Habit[] = [];
const reducer = (
  state: Habit[],
  action: { type: 'ADD' | 'UPDATE' | 'DELETE'; payload: Habit },
) => {
  const targetIdx = state.findIndex((item) => item.id === action.payload.id);

  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];

    case 'UPDATE':
      return [...state].splice(targetIdx, 1, action.payload);

    case 'DELETE':
      return [...state.filter((_, idx) => idx !== targetIdx)];

    default:
      throw new Error();
  }
};

const HabitProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <HabitStateContext.Provider value={state}>
      <HabitDispatchContext.Provider value={dispatch}>
        {children}
      </HabitDispatchContext.Provider>
    </HabitStateContext.Provider>
  );
};

export default HabitProvider;
