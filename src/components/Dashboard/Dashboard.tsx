import { getToday } from 'lib/utils/dateUtils';
import { useHabitStateContext } from 'contexts/HabitContext';
import styles from './Dashboard.module.css';
import HabitCard from './HabitCard/HabitCard';

const DashBoard = () => {
  const habits = useHabitStateContext();
  const todayHabits = habits.filter((habit) =>
    habit.routineDays.includes(getToday().dayWord),
  );

  return (
    <div className={styles.container}>
      <div>
        {todayHabits.length === 0 ? (
          <div className={styles.addHabitButton}>오늘은 할일이 없습니다</div>
        ) : (
          todayHabits.map((habit) => <HabitCard key={habit.id} habit={habit} />)
        )}
      </div>
    </div>
  );
};

export default DashBoard;
