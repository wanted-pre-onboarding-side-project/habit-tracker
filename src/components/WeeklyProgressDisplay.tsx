import { useHabitsInWeek } from '../contexts/hooks/useHabitContext';
import './WeeklyProgressDisplay.css';

const WeeklyProgressDisplay = () => {
  const { achievePercentage: percentage } = useHabitsInWeek();
  return (
    <section className="weekly-progress-display">
      <progress
        className="weekly-progress-bar"
        id="weekly-progress"
        max="100"
        value={percentage}
      >
        {percentage}%
      </progress>
      <label htmlFor="weekly-progress" className="weekly-progress-label">
        {percentage}%
      </label>
    </section>
  );
};

export default WeeklyProgressDisplay;
