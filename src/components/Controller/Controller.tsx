import {
  usePeriodStateContext,
  usePeriodHandleContext,
} from 'contexts/PeriodContext';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import styles from './Controller.module.css';

const Controller = () => {
  const { isLatestWeek, period } = usePeriodStateContext();
  const { movePrevPeriod, moveNextPeriod } = usePeriodHandleContext();

  return (
    <div className={styles.container}>
      <div className={styles.periodSelector}>
        <button onClick={movePrevPeriod}>
          <MdKeyboardArrowLeft size={24} />
        </button>
        <button onClick={moveNextPeriod} disabled={isLatestWeek}>
          <MdKeyboardArrowRight size={24} />
        </button>
      </div>
      <h2 className={styles.period}>{period}</h2>
    </div>
  );
};

export default Controller;
