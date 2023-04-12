import dayjs from 'dayjs';
import './PeriodControl.css';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import {
  usePeriodAction,
  usePeriodValue,
  useToday,
} from '../contexts/PeriodProvider';
import { useHabitsAction } from '../contexts/HabitContextProvider';

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
    const startDate = dayjs(period.startDate)
      .subtract(1, 'week')
      .format('YYYY-MM-DD');
    const endDate = dayjs(period.endDate)
      .subtract(1, 'week')
      .format('YYYY-MM-DD');

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

  const today = useToday();
  const isDisabled = today.isBetween(period.startDate, period.endDate);

  const moveToNextWeek = () => {
    if (isDisabled) return;
    const startDate = dayjs(period.startDate)
      .add(1, 'week')
      .format('YYYY-MM-DD');
    const endDate = dayjs(period.endDate).add(1, 'week').format('YYYY-MM-DD');

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
