import { useState } from 'react';
import { WEEK_DAYS } from 'lib/constant/main';
import { getRoutineByDate } from 'lib/helpers/habit';
import { getRecordedDate } from 'lib/helpers/date';
import type { Day, Habit } from 'lib/types/main';

const useModalInput = (habitToUpdate?: Habit) => {
  const [name, setName] = useState<string>(habitToUpdate?.name || '');
  const [description, setDescription] = useState<string>(
    habitToUpdate?.description || '',
  );
  const [routine, setRoutine] = useState(
    habitToUpdate
      ? getRoutineByDate(habitToUpdate.routineList)
      : [...WEEK_DAYS],
  );

  const routineList = habitToUpdate
    ? { ...habitToUpdate.routineList, [getRecordedDate(new Date())]: routine }
    : { [getRecordedDate(new Date())]: routine };

  const reset = () => {
    setName('');
    setDescription('');
    setRoutine([...WEEK_DAYS]);
  };

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const changeRoutine = (day: Day) => {
    const newRoutine = new Set(routine);

    setRoutine(
      newRoutine.delete(day)
        ? Array.from(newRoutine)
        : Array.from(newRoutine.add(day)),
    );
  };

  return {
    name,
    changeName,
    description,
    changeDescription,
    routine,
    changeRoutine,
    routineList,
    reset,
  };
};

export default useModalInput;
