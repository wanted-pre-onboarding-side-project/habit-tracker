import { useState } from 'react';
import { WEEK_DAYS } from 'lib/constant/main';
import type { Day, Habit } from 'lib/types/main';

const useModalInput = (habitToUpdate?: Habit) => {
  const [name, setName] = useState<string>(habitToUpdate?.name || '');
  const [description, setDescription] = useState<string>(
    habitToUpdate?.description || '',
  );
  const [routineDays, setRoutineDays] = useState(
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
    reset,
  };
};

export default useModalInput;
