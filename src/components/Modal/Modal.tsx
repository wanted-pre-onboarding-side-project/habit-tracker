import { AiOutlineClose } from 'react-icons/ai';
import useModal from './useModal';
import styles from './Modal.module.css';
import type { Habit } from 'interface/main';

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
        <div className={styles.header}>
          <h1>습관 추가하기</h1>
          <p>원하는 습관 이름과 상세 내용을 작성해주세요</p>
          <button className={styles.closeIconButton} onClick={closeModal}>
            <AiOutlineClose size={24} />
          </button>
        </div>
        <hr />
        <div className={styles.section}>
          <h2>1. 이름을 작성해주세요</h2>
          <input value={name} onChange={changeName} />
        </div>
        <div className={styles.section}>
          <h2>2. 추가적인 내용을 작성해주세요</h2>
          <textarea value={description} onChange={changeDescription} />
        </div>
        <div className={styles.section}>
          <h2>3. 실행할 요일을 정해주세요</h2>
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
        <div className={styles.buttonContainer}>
          {habitToUpdate ? (
            <button onClick={editHabit} className={styles.confirmButton}>
              수정하기
            </button>
          ) : (
            <button onClick={addHabit} className={styles.confirmButton}>
              추가하기
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
