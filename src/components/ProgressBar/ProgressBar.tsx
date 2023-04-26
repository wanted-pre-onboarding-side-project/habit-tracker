import { useHabitStateContext } from 'contexts/HabitContext';
import { usePeriodStateContext } from 'contexts/PeriodContext';
import styles from './ProgressBar.module.css';
import { getTotalAchieveRate } from './ProgressBar.helpers';

const ProgressBar = () => {
  const habits = useHabitStateContext();
  const { selectedDate } = usePeriodStateContext();
  const totalAchieveRate = getTotalAchieveRate(habits, selectedDate);

  return (
    <div className={styles.backgroundArea}>
      <div
        className={styles.completedArea}
        style={{
          width: totalAchieveRate,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
