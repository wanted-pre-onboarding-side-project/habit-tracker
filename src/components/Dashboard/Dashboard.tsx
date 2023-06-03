import { useHabitStateContext } from 'contexts/HabitContext';
import { getDayword } from 'lib/helpers/date';
import { getRoutineByDate } from 'lib/helpers/habit';
import styles from './Dashboard.module.css';
import HabitCard from './HabitCard/HabitCard';

const DashBoard = () => {
  const habits = useHabitStateContext();
  const todayHabits = habits.filter((habit) => {
    const todayDate = new Date();
    const routine = getRoutineByDate(habit.routineList, todayDate);
    return routine?.includes(getDayword(todayDate)) ? true : false;
  });

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
