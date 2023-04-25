import React from 'react';
import { WEEK_DAYS } from 'constant';
import { Day, Habit } from 'interface/main';
import { useHabitDispatchContext } from 'contexts/HabitContext';
import { useModalHandleContext } from 'contexts/ModalContext';
import dayjs from 'dayjs';

const useModal = () => {
  const dispatch = useHabitDispatchContext();
  const toggleModal = useModalHandleContext();
  const [name, setName] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [routineDays, setRoutineDays] = React.useState([...WEEK_DAYS]);

  const reset = () => {
    setName('');
    setDescription('');
    setRoutineDays([...WEEK_DAYS]);
  };

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    const now = dayjs().get('day');
    const now2 = dayjs().format('YYYY-MM-DD');
    const payload: Habit = {
      id: Math.ceil(Math.random() * 10000),
      name,
      description,
      routineDays,
      recordedDates: routineDays.includes(WEEK_DAYS[now])
        ? { [now2]: 'inactive' }
        : {},
    };

    dispatch({ type: 'ADD', payload });
    reset();
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
    closeModal,
  };
};

export default useModal;
