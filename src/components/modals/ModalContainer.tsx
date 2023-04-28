import { CSSTransition } from 'react-transition-group';
import { useModalContext } from 'contexts/ModalContext';
import CreateHabitForm from './modalForms/CreateHabitForm';
import UpdateHabitForm from './modalForms/UpdateHabitForm';
import DeleteDialog from './modalForms/DeleteDialog';
import './ModalAnimation.css';

const ModalContainer = () => {
  const modalState = useModalContext();

  const selectedModal =
    modalState === 'create' ? (
      <CreateHabitForm />
    ) : modalState === 'update' ? (
      <UpdateHabitForm />
    ) : (
      <DeleteDialog />
    );

  return (
    <div className="ModalContainerLayout">
      <CSSTransition
        in={!!modalState}
        timeout={{ enter: 1_000 }}
        mountOnEnter
        unmountOnExit
        classNames={
          !!modalState && modalState !== 'delete' ? 'DrawerRight' : ''
        }
      >
        {selectedModal}
      </CSSTransition>
    </div>
  );
};

export default ModalContainer;
