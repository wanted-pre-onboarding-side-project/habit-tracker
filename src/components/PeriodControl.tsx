import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { useHabitsAction } from '../contexts/hooks/useHabitContext';
import {
  usePeriodAction,
  usePeriodValue,
} from '../contexts/hooks/usePeriodContext';
import {
  getDateStringAWeekAfter,
  getDateStringAWeekBefore,
  getTodayDateString,
  isDateBetween,
} from '../helpers/dateUtil';
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
  const period = usePeriodValue();
  const { changePeriod } = usePeriodAction();
  const { loadHabitsWithinPeriod } = useHabitsAction();

  const moveToPrevWeek = () => {
    const startDate = getDateStringAWeekBefore(period.startDate);
    const endDate = getDateStringAWeekBefore(period.endDate);

    changePeriod({ startDate, endDate });
    loadHabitsWithinPeriod({ startDate, endDate });
  };
  return (
    <button onClick={moveToPrevWeek} className="period-button prev">
      <FaChevronCircleLeft />
    </button>
  );
};

const WeekNextButton = () => {
  const period = usePeriodValue();
  const { changePeriod } = usePeriodAction();
  const { loadHabitsWithinPeriod } = useHabitsAction();

  const today = getTodayDateString();
  const isDisabled = isDateBetween(today, {
    start: period.startDate,
    end: period.endDate,
  });

  const moveToNextWeek = () => {
    if (isDisabled) return;
    const startDate = getDateStringAWeekAfter(period.startDate);
    const endDate = getDateStringAWeekAfter(period.endDate);

    changePeriod({ startDate, endDate });
    loadHabitsWithinPeriod({ startDate, endDate });
  };

  if (isDisabled) return null;
  return (
    <button onClick={moveToNextWeek} className="period-button next">
      <FaChevronCircleRight />
    </button>
  );
};
