import TableHead from './parts/TableHead';
import TableBody from './parts/TableBody';
import styles from './HabitListTable.module.css';

const HabitListTable = () => {
  const COLUMN_LENGTH = 10; // total table column length
  const WEEK_COLUMN_OFFSET = 2; //  Mon ~ Sun column exist after
  const columnStyle = (
    <colgroup>
      {Array.from(Array(COLUMN_LENGTH).keys()).map((key, idx) => {
        const todayIdx = WEEK_COLUMN_OFFSET + new Date().getDay();
        if (idx + 1 === todayIdx)
          return (
            <col key={key} style={{ width: '10%', backgroundColor: 'red' }} />
          );
        else return <col key={key} style={{ width: '10%' }} />;
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
