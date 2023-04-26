import { usePeriodHandleContext } from 'contexts/RecordContext';
import { usePeriodContext } from 'contexts/RecordContext';
import { isLatestWeek } from 'lib/utils/dateUtils';
import styles from '../Controller.module.css';

const NavBtn = () => {
  const movePeriod = usePeriodHandleContext();
  const period = usePeriodContext();

  const handleClickNext = () => {
    if (!isLatestWeek(period.end)) movePeriod('next');
    else alert('최신 주간입니다.');
  };

  return (
    <div className={`${styles.NavBtn} NavBtnLayout`}>
      <button onClick={() => movePeriod('prev')}>Prev</button>
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
};

export default NavBtn;
