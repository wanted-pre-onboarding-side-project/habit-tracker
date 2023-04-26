import { useModalContext } from 'contexts/ModalContext';
import CreateHabitForm from './modalForms/CreateHabitForm';
import UpdateHabitForm from './modalForms/UpdateHabitForm';
import DeleteDialog from './modalForms/DeleteDialog';
// TODO: lazy import

const ModalContainer = () => {
  const modalState = useModalContext();

  if (!modalState) return null;

  const selectedModal =
    modalState === 'create' ? (
      <CreateHabitForm />
    ) : modalState === 'update' ? (
      <UpdateHabitForm />
    ) : (
      <DeleteDialog />
    );

  return <div className="ModalContainerLayout">{selectedModal}</div>;
};

export default ModalContainer;
