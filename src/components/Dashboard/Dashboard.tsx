import styles from './Dashboard.module.css';
import HabitCard from './HabitCard/HabitCard';
import useDashboard from './useDashboard';

const DashBoard = () => {
  const todayHabits = useDashboard();

  return (
    <div className={styles.container}>
      <div>
        {todayHabits.length === 0 ? (
          <div className={styles.nothingToday}>오늘은 할일이 없습니다</div>
        ) : (
          todayHabits.map((habit) => <HabitCard key={habit.id} habit={habit} />)
        )}
      </div>
    </div>
  );
};

export default DashBoard;
