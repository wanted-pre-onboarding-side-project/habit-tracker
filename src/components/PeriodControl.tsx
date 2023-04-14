import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { usePeriodValue } from '../contexts/hooks/usePeriodContext';
import usePeriodChange from '../hooks/usePeriodChange';
import './PeriodControl.css';

const PeriodControl = () => {
  return (
    <section className="period">
      <WeekPrevButton />
      <PeriodDisplay />
      <WeekNextButton />
    </section>
  );
};

export default PeriodControl;

const PeriodDisplay = () => {
  const { startDate, endDate } = usePeriodValue();
  return (
    <div>
      {startDate} ~ {endDate}
    </div>
  );
};

const WeekPrevButton = () => {
  const { moveToPrevWeek } = usePeriodChange();
  return (
    <button onClick={moveToPrevWeek} className="period-button prev">
      <FaChevronCircleLeft />
    </button>
  );
};

const WeekNextButton = () => {
  const { moveToNextWeek, isDisabledToMoveNextWeek: isDisabled } =
    usePeriodChange();
  if (isDisabled) return null;
  return (
    <button onClick={moveToNextWeek} className="period-button next">
      <FaChevronCircleRight />
    </button>
  );
};
