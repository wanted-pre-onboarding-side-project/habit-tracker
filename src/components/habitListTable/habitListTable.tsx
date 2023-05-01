import TableHead from './parts/TableHead';
import TableBody from './parts/TableBody';
import styles from './HabitListTable.module.css';

const HabitListTable = () => {
  const COLUMN_LENGTH = 9; // total table column length
  const WEEK_COLUMN_OFFSET = 1; //  Mon ~ Sun column exist after
  const columnStyle = (
    <colgroup>
      {Array.from(Array(COLUMN_LENGTH).keys()).map((key, idx) => {
        const todayIdx = WEEK_COLUMN_OFFSET + new Date().getDay();
        if (idx === 0) return <col key={key} className={styles.NameColumn} />;
        else if (idx + 1 === todayIdx)
          return (
            <col
              key={key}
              className={`${styles.DayColumn} ${styles.TodayColumn}`}
            />
          );
        else if (idx === COLUMN_LENGTH - 1)
          return <col key={key} className={styles.AchieveRateColumn} />;
        else return <col key={key} className={styles.DayColumn} />;
      })}
    </colgroup>
  );

  return (
    <div className={`${styles.HabitListTable} HabitListTableLayout`}>
      <table>
        {columnStyle}
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
};

export default HabitListTable;
