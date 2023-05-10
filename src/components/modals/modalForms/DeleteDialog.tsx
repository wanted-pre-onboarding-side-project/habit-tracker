import { useModalHandleContext } from 'contexts/ModalContext';
import { useTooltipContext } from 'contexts/ModalContext';
import { useHabitsHandleContext } from 'contexts/HabitContext';
import { useRecordHandleContext } from 'contexts/RecordContext';
import styles from '../ModalContainer.module.css';
import type { Habit } from 'interface/main';

const DeleteDialog = () => {
  const { deleteHabit } = useHabitsHandleContext();
  const tooltipId = useTooltipContext() as Habit['id'];
  const { closeModal } = useModalHandleContext();
  const { deleteRecord } = useRecordHandleContext();

  const onClickDelete = () => {
    deleteHabit(tooltipId);
    deleteRecord(tooltipId);
    closeModal();
  };

  return (
    <div className={styles.DeleteDialog}>
      <h1>삭제하시겠습니까?</h1>
      <div>
        <button onClick={onClickDelete}>확인</button>
        <button onClick={closeModal}>취소</button>
      </div>
    </div>
  );
};

export default DeleteDialog;
