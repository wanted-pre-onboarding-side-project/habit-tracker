import { CSSTransition } from 'react-transition-group';
import { useModalContext } from 'contexts/ModalContext';
import styles from './ModalContainer.module.css';
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
    <CSSTransition
      in={!!modalState}
      timeout={{ enter: 1_000 }}
      mountOnEnter
      unmountOnExit
      classNames={!!modalState && modalState !== 'delete' ? 'DrawerRight' : ''}
    >
      <div className={`${styles.modal_container} ModalContainerLayout`}>
        {selectedModal}
      </div>
    </CSSTransition>
  );
};

export default ModalContainer;
