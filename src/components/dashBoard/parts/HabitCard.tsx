import { useRef, useEffect, useState } from 'react';
import { TOGGLE_BY_HEIGHT } from 'constant';
import { useRecords, useRecordsHandle } from 'contexts/RecordContext';
import { getToday } from 'lib/utils/dateUtils';
import styles from '../Dashboard.module.css';
import type { Habit } from 'interface/main';

const HabitCard = ({ habit }: { habit: Habit }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const records = useRecords();
  const thisHabitRecord =
    records.find(({ habitId }) => habitId === habit.id)?.records || [];
  const today = getToday();
  const isMarked = thisHabitRecord.includes(today.yyyymmdd);
  const handleChangeRecord = useRecordsHandle();

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
    <div
      ref={cardRef}
      className={`${styles.HabitCard} ${isMarked ? styles.marked : ''}`}
    >
      <div>{habit.name}</div>
      <div className={descStyle}>{habit.description}</div>
      <button
        onClick={() => {
          handleChangeRecord({
            id: habit.id,
            date: today.yyyymmdd,
            type: isMarked ? 'unmark' : 'mark',
          });
        }}
      >
        {isMarked ? '되돌리기' : '완료하기'}
      </button>
      {isLongToFold && (
        <button onClick={() => setIsFold((prev) => !prev)}>
          toggle: desc Open or Close
        </button>
      )}
    </div>
  );
};

export default HabitCard;
