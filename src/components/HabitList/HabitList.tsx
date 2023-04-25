import styles from './HabitList.module.css';
import useHabitList from './useHabitList';

const HabitList = () => {
  const { weekData, habits, getTypeOfButton, toggleComplete } = useHabitList();

  return (
    <div className={styles.container}>
      <div className={styles.gridRow}>
        <div className={styles.gridRowHeading}></div>
        <div className={styles.gridRowMain}>
          {weekData.map((day) => (
            <div key={day.label} className={styles.gridRowItem}>
              {day.label}
            </div>
          ))}
        </div>
        <div className={styles.gridRowEnd}></div>
      </div>
      {habits.map((item) => (
        <div className={styles.gridRow} key={item.id}>
          <div className={styles.gridRowHeading}>{item.name}</div>
          <div className={styles.gridRowMain}>
            {weekData.map((day) => (
              <button
                key={day.label}
                className={styles.gridRowItem}
                data-type={getTypeOfButton(item, day)}
                onClick={() => toggleComplete(item, day)}
              ></button>
            ))}
          </div>
          <div className={styles.gridRowEnd}></div>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
