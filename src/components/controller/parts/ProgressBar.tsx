import { useHabits } from 'contexts/HabitContext';
import { usePeriod, useRecords } from 'contexts/RecordContext';
import { isBetween } from 'lib/utils/dateUtils';
import styles from '../Controller.module.css';

const ProgressBar = () => {
  const habits = useHabits();
  const records = useRecords();
  const period = usePeriod();

  const weeklyChecksLength = habits.reduce(
    (prev, curr) => prev + curr.days.length,
    0,
  );

  const currentHabitsIdList = habits.map((habit) => habit.id);

  const currentPeriodValidRecords = records
    .filter((record) => currentHabitsIdList.includes(record.habitId))
    .map((record) => {
      return {
        records: record.records.filter((recordDateString) =>
          isBetween(recordDateString, period.start, period.end),
        ),
      };
    });

  const achieveChecksLength = currentPeriodValidRecords.reduce(
    (sum, cur) => sum + cur.records.length,
    0,
  );

  const achieveRate = !weeklyChecksLength
    ? '0%'
    : Math.ceil((achieveChecksLength / weeklyChecksLength) * 100) + '%';

  return (
    <div
      className={`${styles.ProgressBar} ProgressBarLayout`}
      style={{
        backgroundColor: 'lightgray',
        height: '3vh',
      }}
    >
      <div
        style={{
          width: achieveRate,
          height: '3vh',
          backgroundColor: 'cyan',
          textAlign: 'center',
          lineHeight: '3vh',
        }}
      >
        {achieveRate}
      </div>
    </div>
  );
};

export default ProgressBar;
