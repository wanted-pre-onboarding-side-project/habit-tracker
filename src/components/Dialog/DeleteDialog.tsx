import { useModalHandleContext } from 'contexts/ModalContext';
import { useHabitDispatchContext } from 'contexts/HabitContext';
import Dialog from './Dialog';
import type { Habit } from 'interface/main';

const DeleteDialog = ({ habit }: { habit: Habit }) => {
  const { closeModal } = useModalHandleContext();
  const dispatch = useHabitDispatchContext();

  return (
    <Dialog
      onCancel={closeModal}
      onConfirm={() => {
        dispatch({ type: 'DELETE', payload: habit });
        closeModal();
      }}
    />
  );
};

export default DeleteDialog;
