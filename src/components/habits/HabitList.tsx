import { useHabits } from 'contexts/HabitContext';
import { usePeriod, useRecords } from 'contexts/RecordContext';
import { getCurrentWeekDates, getToday } from 'lib/utils/dateUtils';
import styles from './HabitList.module.css';
import HabitListItem from './parts/HabitListItem';

const HabitList = () => {
  const habits = useHabits();
  const records = useRecords();
  const { start } = usePeriod();
  const today = getToday();
  const currentWeekDates = getCurrentWeekDates(start);
  return (
    <div className="HabitListLayout">
      <div
        className={[styles.habitListHeader, styles.habitListContainer].join(
          ' ',
        )}
      >
        <div>habit</div>
        {currentWeekDates.map((targetDate) => (
          <div
            key={targetDate.dayWord}
            className={
              targetDate.yyyymmdd === today.yyyymmdd ? styles.highlight : ''
            }
          >
            {targetDate.dayWord}
          </div>
        ))}
      </div>

      <div
        className={[styles.habitListItems, styles.habitListContainer].join(' ')}
      >
        {habits.map((habit) => (
          <HabitListItem
            currentWeekDates={currentWeekDates}
            key={habit.id}
            habit={habit}
            records={
              records.find(({ habitId }) => habitId === habit.id)?.records || []
            }
          />
        ))}
      </div>
    </div>
  );
};

export default HabitList;
