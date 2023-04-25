import { Habit } from 'interface/main';
import useModal from './useModal';
import styles from './Modal.module.css';

const Modal = ({ habitToUpdate }: { habitToUpdate?: Habit }) => {
  const {
    name,
    changeName,
    description,
    changeDescription,
    routineDays,
    changeRoutineDays,
    WEEK_DAYS,
    addHabit,
    editHabit,
    closeModal,
  } = useModal(habitToUpdate);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div>
          <h2>habit name</h2>
          <input value={name} onChange={changeName} />
        </div>
        <div>
          <h2>habit description</h2>
          <input value={description} onChange={changeDescription} />
        </div>
        <div>
          <h2>routine</h2>
          <div className={styles.routineSelectContainer}>
            {WEEK_DAYS.map((day) => (
              <button
                key={day}
                className={styles.routineSelectButton}
                data-active={routineDays.includes(day)}
                onClick={() => changeRoutineDays(day)}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
        <div>
          {habitToUpdate ? (
            <button onClick={editHabit}>EDIT HABIT</button>
          ) : (
            <button onClick={addHabit}>ADD HABIT</button>
          )}
          <button onClick={closeModal}>close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
