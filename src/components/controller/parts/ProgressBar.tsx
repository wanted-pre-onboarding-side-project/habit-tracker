import { useEffect } from 'react';
import { useRecordContext } from 'contexts/RecordContext';
import { getAcheiveRecords } from 'lib/utils/recordsParser';
import styles from '../Controller.module.css';

const ProgressBar = () => {
  const records = useRecordContext();
  const achievedRecords = getAcheiveRecords(records);

  const achievedRate = Math.ceil(
    (achievedRecords.checked / achievedRecords.total) * 100,
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--achieved-rate',
      `${achievedRate}%`,
    );
  }, [achievedRate]);

  return (
    <div className={`${styles.ProgressBar} ProgressBarLayout`}>
      <div className={styles.Progressed}>{achievedRate}%</div>
    </div>
  );
};

export default ProgressBar;
