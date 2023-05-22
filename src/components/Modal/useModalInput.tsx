import React from 'react';
import { WEEK_DAYS } from 'constant';
import type { Day, Habit } from 'interface/main';

const useModal = (habitToUpdate?: Habit) => {
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

  return {
    name,
    changeName,
    description,
    changeDescription,
    routineDays,
    changeRoutineDays,
    WEEK_DAYS,
    reset,
  };
};

export default useModal;
