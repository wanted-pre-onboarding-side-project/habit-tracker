import { useModalHandleContext } from 'contexts/ModalContext';
import Modal from 'components/Modal/Modal';
import styles from './HabitList.module.css';
import useHabitList from './useHabitList';

const HabitList = () => {
  const { weekData, habits, getTypeOfButton, getAchieveRate, toggleComplete } =
    useHabitList();
  const { toggleModal, changeModalComponent } = useModalHandleContext();

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
          <div className={styles.gridRowHeading}>
            {item.name}
            <button
              onClick={() => {
                toggleModal();
                changeModalComponent(<Modal habitToUpdate={item} />);
              }}
            >
              :
            </button>
          </div>
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
          <div className={styles.gridRowEnd}>{getAchieveRate(item)}</div>
        </div>
      ))}
    </div>
  );
};

export default HabitList;
