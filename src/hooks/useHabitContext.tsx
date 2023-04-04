import { useContext } from 'react';
import { HabitContext } from '../context/HabitContext';

export const useHabitContext = () => {
  const habitContext = useContext(HabitContext);
  if (!habitContext)
    throw new Error(
      '<HabitContext.Provider> 내에서 useHabitContext를 사용해주세요',
    );
  return habitContext;
};
