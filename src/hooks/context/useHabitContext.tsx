import { useContext } from 'react';
import {
  HabitActionContext,
  HabitValueContext,
} from '../../context/HabitContext';

export const useHabitValueContext = () => {
  const habitValueContext = useContext(HabitValueContext);
  if (!habitValueContext)
    throw new Error(
      '<HabitValueContext.Provider> 내에서 useHabitValueContext을 사용해주세요',
    );
  return habitValueContext;
};

export const useHabitActionContext = () => {
  const habitActionContext = useContext(HabitActionContext);
  if (!habitActionContext)
    throw new Error(
      '<HabitActionContext.Provider> 내에서 useHabitActionContext을 사용해주세요',
    );
  return habitActionContext;
};
