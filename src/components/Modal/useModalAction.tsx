import { useHabitDispatchContext } from 'contexts/HabitContext';
import { useModalHandleContext } from 'contexts/ModalContext';
import { getDayword, getRecordedDate } from 'lib/helpers/date';
import type { Habit } from 'lib/types/main';

const useModalAction = ({
  name,
  description,
  routineDays,
}: Pick<Habit, 'name' | 'description' | 'routineDays'>) => {
  const dispatch = useHabitDispatchContext();
  const { closeModal } = useModalHandleContext();

  const addHabit = () => {
    const newHabit: Habit = updateTodayRecord({
      id: Math.ceil(Math.random() * 10000),
      name,
      description,
      routineDays,
      recordedDates: {},
    });

    dispatch({ type: 'ADD', payload: newHabit });
  };

  const editHabit = (habitToUpdate: Habit) => {
    const changedHabit: Habit = updateTodayRecord({
      ...habitToUpdate,
      name,
      description,
      routineDays,
    });

    dispatch({ type: 'UPDATE', payload: changedHabit });
  };

  const updateTodayRecord = (habit: Habit) => {
    const nowDate = new Date();
    const newRecordedDate = { ...habit.recordedDates };
    habit.routineDays.includes(getDayword(nowDate))
      ? (newRecordedDate[getRecordedDate(nowDate)] = 'inactive')
      : delete newRecordedDate[getRecordedDate(nowDate)];

    return { ...habit, recordedDates: newRecordedDate };
  };

  return { addHabit, editHabit, closeModal };
};

export default useModalAction;
