import React from 'react';
import { WEEK_DAYS } from 'constant';
import { Day, Habit } from 'interface/main';
import { useHabitDispatchContext } from 'contexts/HabitContext';
import { useModalHandleContext } from 'contexts/ModalContext';
import { getDayword, getRecordedDate } from 'lib/helpers/dateHelpers';

const useModal = (habitToUpdate?: Habit) => {
  const dispatch = useHabitDispatchContext();
  const { toggleModal } = useModalHandleContext();
  const [name, setName] = React.useState<string>(habitToUpdate?.name || '');
  const [description, setDescription] = React.useState<string>(
    habitToUpdate?.description || '',
  );
  const [routineDays, setRoutineDays] = React.useState(
    habitToUpdate?.routineDays || [...WEEK_DAYS],
  );

  const reset = () => {
    setName('');
    setDescription('');
    setRoutineDays([...WEEK_DAYS]);
  };

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const changeRoutineDays = (day: Day) => {
    const newRoutineDays = new Set(routineDays);

    setRoutineDays(
      newRoutineDays.delete(day)
        ? Array.from(newRoutineDays)
        : Array.from(newRoutineDays.add(day)),
    );
  };

  const addHabit = () => {
    const nowDate = new Date();

    const payload: Habit = {
      id: Math.ceil(Math.random() * 10000),
      name,
      description,
      routineDays,
      recordedDates: routineDays.includes(getDayword(nowDate))
        ? { [getRecordedDate(nowDate)]: 'inactive' }
        : {},
    };

    dispatch({ type: 'ADD', payload });
    closeModal();
  };

  const editHabit = () => {
    const nowDate = new Date();
    const newRecordedDate = { ...habitToUpdate?.recordedDates };
    routineDays.includes(getDayword(nowDate))
      ? (newRecordedDate[getRecordedDate(nowDate)] = 'inactive')
      : delete newRecordedDate[getRecordedDate(nowDate)];

    const payload: Habit = {
      id: habitToUpdate?.id as number,
      name,
      description,
      routineDays,
      recordedDates: newRecordedDate,
    };

    dispatch({ type: 'UPDATE', payload });
    closeModal();
  };

  const closeModal = () => {
    toggleModal();
    reset();
  };

  return {
    name,
    changeName,
    description,
    changeDescription,
    routineDays,
    changeRoutineDays,
    WEEK_DAYS,
    addHabit,
    editHabit,
    closeModal,
  };
};

export default useModal;
