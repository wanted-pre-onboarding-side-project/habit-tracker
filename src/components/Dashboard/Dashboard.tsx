import { getToday } from 'lib/utils/dateUtils';
import { useHabitStateContext } from 'contexts/HabitContext';
import styles from './Dashboard.module.css';
import HabitCard from './HabitCard/HabitCard';

const DashBoard = () => {
  const habits = useHabitStateContext();

  return (
    <div className={styles.container}>
      <div>
        {habits
          .filter((habit) => habit.routineDays.includes(getToday().dayWord))
          .map((habit) => (
            <HabitCard key={habit.id} habit={habit} />
          ))}
      </div>
    </div>
  );
};

export default DashBoard;
