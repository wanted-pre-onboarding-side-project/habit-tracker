import React from 'react';
import { useHabitDispatchContext } from 'contexts/HabitContext';
import { TOGGLE_BY_HEIGHT } from 'constant';
import { getFormattedString } from 'lib/utils/dateUtils';
import { getToday } from 'lib/utils/dateUtils';
import type { Habit } from 'interface/main';

const useHabitCard = (habit: Habit) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [isLongToFold, setIsLongToFold] = React.useState<boolean>(false);
  const [isFold, setIsFold] = React.useState<boolean>(true);
  const dispatch = useHabitDispatchContext();
  const foldButtonContent = isFold ? '더보기' : '닫기';
  const completed =
    habit.recordedDates[getFormattedString(getToday().origin)] === 'completed';
  const completeButtonContent = completed ? '취소' : '완료';

  React.useEffect(() => {
    if (cardRef.current && cardRef.current.offsetHeight > TOGGLE_BY_HEIGHT)
      setIsLongToFold(true);
  }, []);

  const toggleFold = () => {
    setIsFold((prev) => !prev);
  };

  const toggleComplete = () => {
    const clonedHabit = { ...habit };
    clonedHabit.recordedDates[getFormattedString(getToday().origin)] =
      clonedHabit.recordedDates[getFormattedString(getToday().origin)] ===
      'inactive'
        ? 'completed'
        : 'inactive';

    dispatch({ type: 'UPDATE', payload: clonedHabit });
  };

  return {
    cardRef,
    isLongToFold,
    isFold,
    toggleFold,
    foldButtonContent,
    completed,
    toggleComplete,
    completeButtonContent,
  };
};

export default useHabitCard;
