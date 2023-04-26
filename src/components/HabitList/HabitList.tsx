import { useModalHandleContext } from 'contexts/ModalContext';
import { useHabitDispatchContext } from 'contexts/HabitContext';
import Modal from 'components/Modal/Modal';
import Popover from 'components/Popover/Popover';
import Dialog from 'components/Dialog/Dialog';
import styles from './HabitList.module.css';
import useHabitList from './useHabitList';
const HabitList = () => {
  const { weekData, habits, getTypeOfButton, getAchieveRate, toggleComplete } =
    useHabitList();
  const { toggleModal, changeModalComponent } = useModalHandleContext();
  const dispatch = useHabitDispatchContext();

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
            <Popover>
              <button
                onClick={() => {
                  toggleModal();
                  changeModalComponent(<Modal habitToUpdate={item} />);
                }}
              >
                Edit Haibt
              </button>
              <button
                onClick={() => {
                  toggleModal();
                  changeModalComponent(
                    <Dialog
                      onCancel={toggleModal}
                      onConfirm={() => {
                        dispatch({ type: 'DELETE', payload: item });
                        toggleModal();
                      }}
                    />,
                  );
                }}
              >
                Delete Habit
              </button>
            </Popover>
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
