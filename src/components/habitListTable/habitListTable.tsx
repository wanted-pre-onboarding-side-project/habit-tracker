import TableHead from './parts/TableHead';
import TableBody from './parts/TableBody';
import styles from './HabitListTable.module.css';

const HabitListTable = () => {
  return (
    <div className={`${styles.HabitListTable} HabitListTableLayout`}>
      <table>
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
};

export default HabitListTable;
