import { useRef, useEffect, useState } from 'react';
import { TOGGLE_BY_HEIGHT } from 'constant';
import styles from '../Dashboard.module.css';
import type { Habit } from 'interface/main';

const HabitCard = ({ habit }: { habit: Habit }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLongToFold, setIsLongToFold] = useState<boolean>(false);

  useEffect(() => {
    if (cardRef.current && cardRef.current.offsetHeight > TOGGLE_BY_HEIGHT)
      setIsLongToFold(true);
  }, []);

  const [isFold, setIsFold] = useState<boolean>(true);
  const [descStyle, setDescStyle] = useState<string | undefined>();

  useEffect(() => {
    setDescStyle(isFold ? styles.ShortDescCardStyle : undefined);
  }, [isFold]);

  return (
    <div ref={cardRef} className={styles.HabitCard}>
      <div>{habit.name}</div>
      <div className={descStyle}>{habit.description}</div>
      <button onClick={() => alert('yet no record context')}>완료</button>
      {isLongToFold && (
        <button onClick={() => setIsFold((prev) => !prev)}>
          toggle: desc Open or Close
        </button>
      )}
    </div>
  );
};

export default HabitCard;

//  TODO
//
//  habit.id랑 오늘 날짜 값으로 record도 가져와야겠네.
//  habit.id로 dispatch done or undone
