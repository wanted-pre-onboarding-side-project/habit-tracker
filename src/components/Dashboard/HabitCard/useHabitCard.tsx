import { useState, useEffect, useRef } from 'react';
import { useHabitDispatchContext } from 'contexts/HabitContext';
import { TOGGLE_BY_HEIGHT } from 'lib/constant/main';
import { getRecordedDate } from 'lib/helpers/date';
import type { Habit } from 'lib/types/main';

const useHabitCard = (habit: Habit) => {
  const [isLongToFold, setIsLongToFold] = useState<boolean>(false);
  const [isFold, setIsFold] = useState<boolean>(true);
  const cardRef = useRef<HTMLDivElement>(null);
  const dispatch = useHabitDispatchContext();

  const todayRecordedDate = getRecordedDate(new Date());
  const foldButtonContent = isFold ? '더보기' : '닫기';
  const completed = habit.recordedDates[todayRecordedDate] === 'completed';
  const completeButtonContent = completed ? '취소' : '완료';

  useEffect(() => {
    if (cardRef.current && cardRef.current.offsetHeight > TOGGLE_BY_HEIGHT)
      setIsLongToFold(true);
  }, []);

  const toggleFold = () => {
    setIsFold((prev) => !prev);
  };

  const toggleComplete = () => {
    const clonedHabit = { ...habit };
    clonedHabit.recordedDates[todayRecordedDate] =
      clonedHabit.recordedDates[todayRecordedDate] === 'inactive'
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
