import { DAYS } from 'constant';
import { useHabits } from 'contexts/HabitContext';
import { Fragment } from 'react';
import styles from './HabitList.module.css';

const HabitList = () => {
  const habits = useHabits();
  return (
    <div className="HabitListLayout">
      <div
        className={[styles.habitListHeader, styles.habitListContainer].join(
          ' ',
        )}
      >
        <div>habit</div>
        {DAYS.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div
        className={[styles.habitListItems, styles.habitListContainer].join(' ')}
      >
        {habits.map((habit) => (
          <Fragment key={habit.id}>
            <div>{habit.name}</div>
            {DAYS.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default HabitList;
function getToday() {
  throw new Error('Function not implemented.');
}
