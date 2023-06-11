import Popover from 'components/Popover/Popover';
import styles from './HabitList.module.css';
import useHabitList from './useHabitList';

const HabitList = () => {
  const { weekData, habitsData } = useHabitList();

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
      {habitsData.map((item) => (
        <div className={styles.gridRow} key={item.id}>
          <div className={styles.gridRowHeading}>
            <span>{item.name}</span>
            <Popover habit={item} />
          </div>
          <div className={styles.gridRowMain}>
            {item.buttonData.map((button, idx) => (
              <button
                key={idx}
                className={styles.gridRowItem}
                disabled={button.disabled}
                data-type={button.type}
                onClick={button.toggle}
              ></button>
            ))}
          </div>
          <div className={styles.gridRowEnd}>{item.achieveRate}</div>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
