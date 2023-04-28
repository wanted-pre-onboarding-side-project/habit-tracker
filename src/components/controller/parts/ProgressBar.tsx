import { useRecordContext } from 'contexts/RecordContext';
import { getAcheiveRecords } from 'lib/utils/recordsParser';
import styles from '../Controller.module.css';

const ProgressBar = () => {
  const records = useRecordContext();
  const achievedRecords = getAcheiveRecords(records);

  const achievedRate = Math.ceil(
    (achievedRecords.checked / achievedRecords.total) * 100,
  );

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
          width: achievedRate,
          height: '3vh',
          backgroundColor: 'cyan',
          textAlign: 'center',
          lineHeight: '3vh',
        }}
      >
        {achievedRate}%
      </div>
    </div>
  );
};

export default ProgressBar;
