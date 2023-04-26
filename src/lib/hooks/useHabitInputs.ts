import { useState } from 'react';
import { Habit, Day } from 'interface/main';

const useHabitInputs = (
  initName: string,
  initDesc: string,
  initDays: Day[],
): [
  Omit<Habit, 'id'>,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
] => {
  const [name, setName] = useState(initName);
  const [description, setDescription] = useState(initDesc);
  const [days, setDays] = useState<Day[]>(
    initDays.length === 0
      ? ['월', '화', '수', '목', '금', '토', '일']
      : initDays,
  );

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangeDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const onChangeDays = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name: selectedDay, checked: isChecked } = event.target;
    if (isChecked) setDays([...days, selectedDay as Day]);
    else setDays(days.filter((day) => day !== selectedDay));
  };

  const habitObject = {
    name,
    description,
    days,
  };

  return [habitObject, onChangeName, onChangeDesc, onChangeDays];
};

export default useHabitInputs;
