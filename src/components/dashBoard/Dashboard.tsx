import { getToday } from 'lib/utils/dateUtils';
import { useHabitsContext } from 'contexts/HabitContext';
import styles from './Dashboard.module.css';
import HabitCard from './parts/HabitCard';

const DashBoard = () => {
  const habits = useHabitsContext();

  return (
    <div className={`${styles.HabitDashBoard} HabitDashBoardLayout`}>
      <h3>TODAY</h3>
      <div>
        {habits
          .filter((habit) => habit.days.includes(getToday().dayWord))
          .map((habit) => (
            <HabitCard key={habit.id} habit={habit} />
          ))}
      </div>
    </div>
  );
};

export default DashBoard;
