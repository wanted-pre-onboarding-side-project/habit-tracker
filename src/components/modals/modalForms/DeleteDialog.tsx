import { useModalHandleContext } from 'contexts/ModalContext';
import { useTooltipContext } from 'contexts/ModalContext';
import { useHabitsHandleContext } from 'contexts/HabitContext';
import type { Habit } from 'interface/main';

const DeleteDialog = () => {
  const { closeModal } = useModalHandleContext();
  const tooltipId = useTooltipContext() as Habit['id'];
  const { deleteHabit } = useHabitsHandleContext();

  return (
    <div>
      <p>삭제하시겠습니까?</p>
      <button onClick={() => deleteHabit(tooltipId)}>확인</button>
      <button onClick={closeModal}>취소</button>
    </div>
  );
};

export default DeleteDialog;
