import { useHabitsContext } from 'contexts/HabitContext';
import styles from '../Controller.module.css';

const ProgressBar = () => {
  const habits = useHabitsContext();
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
    <div
      className={`${styles.ProgressBar} ProgressBarLayout`}
      style={{
        backgroundColor: 'lightgray',
        height: '3vh',
      }}
    >
      <div
        style={{
          width: achieveRate,
          height: '3vh',
          backgroundColor: 'cyan',
          textAlign: 'center',
          lineHeight: '3vh',
        }}
      >
        {achieveRate}
      </div>
    </div>
  );
};

export default ProgressBar;
