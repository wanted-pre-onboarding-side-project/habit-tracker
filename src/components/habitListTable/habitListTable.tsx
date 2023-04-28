import TableHead from './parts/TableHead';
import TableBody from './parts/TableBody';
import styles from './HabitListTable.module.css';

const HabitListTable = () => {
  const COLUMN_LENGTH = 10; // total table column length
  const WEEK_COLUMN_OFFSET = 2; //  Mon ~ Sun column exist after
  const columnStyle = (
    <colgroup>
      {Array.from(Array(COLUMN_LENGTH).keys()).map((key, idx) => {
        const TODAY_INDEX = WEEK_COLUMN_OFFSET + new Date().getDay();
        if (idx + 1 === TODAY_INDEX)
          return <col key={key} style={{ backgroundColor: 'red' }} />;
        else return <col key={key} />;
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
