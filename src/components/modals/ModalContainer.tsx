import { useModalContext } from 'contexts/ModalContext';
import CreateHabitForm from './modalForms/CreateHabitForm';
import UpdateHabitForm from './modalForms/UpdateHabitForm';
// TODO: lazy import

const ModalContainer = () => {
  const modalState = useModalContext();

  if (!modalState) return null;

  const selectedModal =
    modalState === 'create' ? <CreateHabitForm /> : <UpdateHabitForm />;

  return <div className="ModalContainerLayout">{selectedModal}</div>;
};

export default ModalContainer;
