import { useModalHandleContext } from 'contexts/ModalContext';
import { useHabitDispatchContext } from 'contexts/HabitContext';
import Dialog from './Dialog';
import type { Habit } from 'interface/main';

const DeleteDialog = ({ habit }: { habit: Habit }) => {
  const { toggleModal } = useModalHandleContext();
  const dispatch = useHabitDispatchContext();

  return (
    <Dialog
      onCancel={toggleModal}
      onConfirm={() => {
        dispatch({ type: 'DELETE', payload: habit });
        toggleModal();
      }}
    />
  );
};

export default DeleteDialog;
