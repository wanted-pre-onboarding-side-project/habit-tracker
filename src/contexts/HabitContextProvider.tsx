import { ReactNode, useMemo } from 'react';
import { isValid } from 'lib/utils/validator';
import useLocalStorageReducer from 'lib/hooks/useLocalStorageReducer';
import { HabitContext, HabitHandleContext } from './HabitContext';
import { useModalHandleContext } from './ModalContext';
import type { Habit } from 'interface/main';

export const HabitProvider = ({ children }: { children: ReactNode }) => {
  const { closeModal } = useModalHandleContext();
  const { state: habits, dispatch } = useLocalStorageReducer('habits');

  const habitHandlers = useMemo(
    () => ({
      createHabit: (newHabitContent: Omit<Habit, 'id'>) => {
        if (isValid(newHabitContent)) {
          dispatch({ type: 'CREATE', value: newHabitContent });
          closeModal();
        }
      },
      updateHabit: (updatingHabitContent: Habit) => {
        if (isValid(updatingHabitContent)) {
          dispatch({ type: 'UPDATE', value: updatingHabitContent });
          closeModal();
        }
      },
      deleteHabit: (habitId: Habit['id']) => {
        dispatch({ type: 'DELETE', value: habitId });
        closeModal();
      },
    }),
    [closeModal, dispatch],
  );

  return (
    <HabitContext.Provider value={habits}>
      <HabitHandleContext.Provider value={habitHandlers}>
        {children}
      </HabitHandleContext.Provider>
    </HabitContext.Provider>
  );
};
