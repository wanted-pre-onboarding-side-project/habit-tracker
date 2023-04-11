import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
  return (
    <div className={styles.backgroundArea}>
      <div className={styles.completedArea} style={{ width: `${60}%` }}></div>
    </div>
  );
};

export default ProgressBar;
