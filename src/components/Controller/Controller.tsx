import {
  usePeriodStateContext,
  usePeriodHandleContext,
} from 'contexts/PeriodContext';
import styles from './Controller.module.css';

const Controller = () => {
  const { isLatestWeek, period } = usePeriodStateContext();
  const { movePrevPeriod, moveNextPeriod } = usePeriodHandleContext();

  return (
    <div className={styles.container}>
      <div className={styles.periodSelector}>
        <button onClick={movePrevPeriod}>{'<'}</button>
        <button onClick={moveNextPeriod} disabled={isLatestWeek}>
          {'>'}
        </button>
      </div>
      <h2 className={styles.period}>{period}</h2>
    </div>
  );
};

export default Controller;
