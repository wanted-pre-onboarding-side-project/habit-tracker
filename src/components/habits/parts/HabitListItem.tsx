import { useRecordsHandle } from 'contexts/RecordContext';
import { ObjectifiedDate } from 'interface/context';
import { Habit, HabitRecord } from 'interface/main';
import { getToday, isFutureDate } from 'lib/utils/dateUtils';
import styles from '../HabitList.module.css';
import HabitContextMenu from './HabitContextMenu';

const HabitListItem = ({
  selected,
  habit,
  records,
  currentWeekDates,
  onNameClick,
  closeContextMenu,
}: {
  selected?: boolean;
  habit: Habit;
  records: HabitRecord['records'];
  currentWeekDates: ObjectifiedDate[];
  onNameClick: () => void;
  closeContextMenu: () => void;
}) => {
  const handleChangeRecord = useRecordsHandle();
  const today = getToday();

  return (
    <>
      <div
        className={styles.habitName}
        onClick={(e) => {
          e.stopPropagation();
          onNameClick();
        }}
        tabIndex={0}
      >
        {habit.name}
        {selected && (
          <HabitContextMenu closeContextMenu={closeContextMenu} habit={habit} />
        )}
      </div>
      {currentWeekDates.map((targetDate) => (
        <div
          key={targetDate.yyyymmdd}
          className={
            targetDate.yyyymmdd === today.yyyymmdd ? styles.highlight : ''
          }
        >
          {habit.days.includes(targetDate.dayWord) && (
            <input
              className={styles.recordCheckBox}
              type="checkbox"
              disabled={isFutureDate(targetDate)}
              checked={records.includes(targetDate.yyyymmdd)}
              onChange={() => {
                handleChangeRecord({
                  id: habit.id,
                  date: targetDate.yyyymmdd,
                  type: records.includes(targetDate.yyyymmdd)
                    ? 'unmark'
                    : 'mark',
                });
              }}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default HabitListItem;
