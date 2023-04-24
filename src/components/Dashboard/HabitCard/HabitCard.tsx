import { useRef, useEffect, useState } from 'react';
import { TOGGLE_BY_HEIGHT } from 'constant';
import styles from './HabitCard.module.css';
import type { Habit } from 'interface/main';

const HabitCard = ({ habit }: { habit: Habit }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLongToFold, setIsLongToFold] = useState<boolean>(false);
  const [isFold, setIsFold] = useState<boolean>(true);

  useEffect(() => {
    if (cardRef.current && cardRef.current.offsetHeight > TOGGLE_BY_HEIGHT)
      setIsLongToFold(true);
  }, []);

  return (
    <div ref={cardRef} className={styles.container}>
      <h2 className={styles.title}>{habit.name}</h2>
      <p
        className={
          isFold && isLongToFold ? styles.descriptionFolded : styles.description
        }
      >
        {habit.description}
      </p>
      {isLongToFold && (
        <button
          onClick={() => setIsFold((prev) => !prev)}
          className={styles.foldButton}
        >
          {isFold ? '더보기' : '닫기'}
        </button>
      )}
      <button className={styles.completeToggleButton}>완료</button>
    </div>
  );
};

export default HabitCard;

//  TODO
//
//  habit.id랑 오늘 날짜 값으로 record도 가져와야겠네.
//  habit.id로 dispatch done or undone
