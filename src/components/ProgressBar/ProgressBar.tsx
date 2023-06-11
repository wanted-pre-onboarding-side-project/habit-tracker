import styles from './ProgressBar.module.css';
import useProgressBar from './useProgressBar';

const ProgressBar = () => {
  const totalAchieveRate = useProgressBar();
  console.log(totalAchieveRate);
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
