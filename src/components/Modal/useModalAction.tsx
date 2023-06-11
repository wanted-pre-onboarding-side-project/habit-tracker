import { useHabitDispatchContext } from 'contexts/HabitContext';
import { useModalHandleContext } from 'contexts/ModalContext';
import type { Habit } from 'lib/types/main';

const useModalAction = ({
  name,
  description,
  routineList,
}: Pick<Habit, 'name' | 'description' | 'routineList'>) => {
  const dispatch = useHabitDispatchContext();
  const { closeModal } = useModalHandleContext();

  const addHabit = () => {
    const newHabit: Habit = {
      id: Math.ceil(Math.random() * 10000),
      name,
      description,
      routineList,
      completedDates: [],
    };

    dispatch({ type: 'ADD', payload: newHabit });
  };

  const editHabit = (habitToUpdate: Habit) => {
    const changedHabit: Habit = {
      ...habitToUpdate,
      name,
      description,
      routineList,
    };

    dispatch({ type: 'UPDATE', payload: changedHabit });
  };

  return { addHabit, editHabit, closeModal };
};

export default useModalAction;
