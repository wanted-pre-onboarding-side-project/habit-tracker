import {
  usePeriodStateContext,
  usePeriodHandleContext,
} from 'contexts/PeriodContext';
import { isLatestWeek } from 'lib/utils/dateUtils';
import AddHabitBtn from './parts/AddHabitBtn';
import styles from './Controller.module.css';

const Controller = () => {
  const period = usePeriodStateContext();
  const { movePrevPeriod, moveNextPeriod } = usePeriodHandleContext();

  return (
    <div className={styles.container}>
      <div className={styles.navBtn}>
        <button onClick={movePrevPeriod}>{'<'}</button>
        <button onClick={moveNextPeriod} disabled={isLatestWeek(period.end)}>
          {'>'}
        </button>
      </div>
      <h2 className={styles.period}>
        {`${period.start.month}월 ${period.start.date}일 ~ ${period.end.month}월 ${period.end.date}일`}
      </h2>
      <AddHabitBtn />
    </div>
  );
};

export default Controller;
