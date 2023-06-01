import { useModalHandleContext } from 'contexts/ModalContext';
import { useHabitDispatchContext } from 'contexts/HabitContext';
import Dialog from './Dialog';
import type { Habit } from 'lib/types/main';

const DeleteDialog = ({ habit }: { habit: Habit }) => {
  const { closeModal } = useModalHandleContext();
  const dispatch = useHabitDispatchContext();

  const handleConfirmBtn = () => {
    dispatch({ type: 'DELETE', payload: habit });
    closeModal();
  };

  return <Dialog onCancel={closeModal} onConfirm={handleConfirmBtn} />;
};

export default DeleteDialog;
