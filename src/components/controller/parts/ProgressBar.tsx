import { useHabits } from 'contexts/HabitContext';
import styles from '../Controller.module.css';

const ProgressBar = () => {
  const habits = useHabits();
  const weeklyChecksLength = habits.reduce(
    (prev, curr) => prev + curr.days.length,
    0,
  );
  //  금주 check 개수는 임시로 생성
  const tempAchieveChecksLength = weeklyChecksLength > 5 ? 5 : 0;

  const achieveRate = !weeklyChecksLength
    ? '0%'
    : Math.ceil((tempAchieveChecksLength / weeklyChecksLength) * 100) + '%';

  return (
    <div className={styles.backgroundArea}>
      <div
        className={styles.completedArea}
        style={{
          width: achieveRate,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
