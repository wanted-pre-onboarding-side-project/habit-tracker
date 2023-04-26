import styles from './HabitListTable.module.css';
import TableHead from './parts/TableHead';
import TableBody from './parts/TableBody';

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
