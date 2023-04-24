import { getToday } from 'lib/utils/dateUtils';
import { useHabits } from 'contexts/HabitContext';
import styles from './Dashboard.module.css';
import HabitCard from './HabitCard/HabitCard';

const DashBoard = () => {
  const habits = useHabits();

  return (
    <div className={styles.container}>
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
