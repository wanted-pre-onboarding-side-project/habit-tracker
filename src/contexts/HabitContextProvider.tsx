import { ReactNode, useMemo } from 'react';
import { isValid } from 'lib/utils/validator';
import useLocalStorageReducer from 'lib/hooks/useLocalStorageReducer';
import { habitReducer } from 'lib/reducers/habitReducer';
import { HabitContext, HabitHandleContext } from './HabitContext';
import type { Habit } from 'interface/main';

export const HabitProvider = ({ children }: { children: ReactNode }) => {
  const { state: habits, dispatch } = useLocalStorageReducer(
    'habits',
    habitReducer,
  );

  const habitHandlers = useMemo(
    () => ({
      createHabit: (newHabitContent: Omit<Habit, 'id'>) => {
        if (isValid(newHabitContent)) {
          dispatch({ type: 'CREATE', value: newHabitContent });
        }
      },
      updateHabit: (updatingHabitContent: Habit) => {
        if (isValid(updatingHabitContent)) {
          dispatch({ type: 'UPDATE', value: updatingHabitContent });
        }
      },
      deleteHabit: (habitId: Habit['id']) => {
        dispatch({ type: 'DELETE', value: habitId });
      },
    }),
    [dispatch],
  );

  return (
    <HabitContext.Provider value={habits as Habit[]}>
      <HabitHandleContext.Provider value={habitHandlers}>
        {children}
      </HabitHandleContext.Provider>
    </HabitContext.Provider>
  );
};
