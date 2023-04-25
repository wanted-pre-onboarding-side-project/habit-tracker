import useModal from './useModal';
import styles from './Modal.module.css';
import ModalPortal from './ModalPortal';

const Modal = () => {
  const {
    name,
    changeName,
    description,
    changeDescription,
    routineDays,
    changeRoutineDays,
    WEEK_DAYS,
    addHabit,
    closeModal,
  } = useModal();

  return (
    <ModalPortal>
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
            <button onClick={addHabit}>ADD HABIT</button>
            <button onClick={closeModal}>close</button>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
