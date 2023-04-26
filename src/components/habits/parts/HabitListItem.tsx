import { useRecordsHandle } from 'contexts/RecordContext';
import { ObjectifiedDate } from 'interface/context';
import { Habit, HabitRecord } from 'interface/main';
import { getToday, isFutureDate } from 'lib/utils/dateUtils';
import styles from '../HabitList.module.css';

const HabitListItem = ({
  habit,
  records,
  currentWeekDates,
}: {
  habit: Habit;
  records: HabitRecord['records'];
  currentWeekDates: ObjectifiedDate[];
}) => {
  const handleChangeRecord = useRecordsHandle();
  const today = getToday();

  return (
    <>
      <div>{habit.name}</div>
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
