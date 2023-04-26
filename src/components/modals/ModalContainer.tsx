import { useModalContext } from 'contexts/ModalContext';
import CreateHabitForm from './modalForms/CreateHabitForm';
// TODO: lazy import

const ModalContainer = () => {
  const isModalOpen = useModalContext();

  if (!isModalOpen) return null;

  return (
    <div className="ModalContainerLayout">
      <CreateHabitForm />
    </div>
  );
};

export default ModalContainer;
