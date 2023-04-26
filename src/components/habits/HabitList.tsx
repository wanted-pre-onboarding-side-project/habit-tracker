import { useHabits } from 'contexts/HabitContext';
import { usePeriod, useRecords } from 'contexts/RecordContext';
import { Habit } from 'interface/main';
import { getCurrentWeekDates, getToday } from 'lib/utils/dateUtils';
import { useState } from 'react';
import styles from './HabitList.module.css';
import HabitListItem from './parts/HabitListItem';

const HabitList = () => {
  const habits = useHabits();
  const records = useRecords();
  const { start } = usePeriod();
  const today = getToday();
  const currentWeekDates = getCurrentWeekDates(start);

  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);
  const openContextMenu = (habit: Habit) => {
    setSelectedHabit(habit);
  };
  const closeContextMenu = () => {
    setSelectedHabit(null);
  };
  return (
    <div className="HabitListLayout" onClick={closeContextMenu}>
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
            selected={selectedHabit ? selectedHabit.id === habit.id : false}
            onNameClick={() => openContextMenu(habit)}
            closeContextMenu={closeContextMenu}
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
