import { usePeriodHandle } from 'contexts/RecordContext';
import { usePeriod } from 'contexts/RecordContext';
import { isLatestWeek } from 'lib/utils/dateUtils';
import AddHabitBtn from './parts/AddHabitBtn';
import styles from './Controller.module.css';

const Controller = () => {
  const movePeriod = usePeriodHandle();
  const period = usePeriod();

  const handleClickNext = () => {
    if (!isLatestWeek(period.end)) movePeriod('next');
    else alert('최신 주간입니다.');
  };

  return (
    <div className={styles.container}>
      <div className={styles.navBtn}>
        <button onClick={() => movePeriod('prev')}>Prev</button>
        <button onClick={handleClickNext}>Next</button>
      </div>
      <h2 className={styles.period}>
        {`${period.start.month}월 ${period.start.date}일 ~ ${period.end.month}월 ${period.end.date}일`}
      </h2>
      <AddHabitBtn />
    </div>
  );
};

export default Controller;
