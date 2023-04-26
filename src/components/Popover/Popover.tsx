import React from 'react';
import { AiOutlineMore } from 'react-icons/ai';
import { useModalHandleContext } from 'contexts/ModalContext';
import { useHabitDispatchContext } from 'contexts/HabitContext';
import Modal from 'components/Modal/Modal';
import Dialog from 'components/Dialog/Dialog';
import styles from './Popover.module.css';
import type { Habit } from 'interface/main';

const HabitPopover = ({ habit }: { habit: Habit }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { toggleModal, changeModalComponent } = useModalHandleContext();
  const dispatch = useHabitDispatchContext();

  return (
    <div className={styles.container}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen((prev) => !prev)}
        data-open={isOpen}
      >
        <AiOutlineMore size={24} />
      </button>
      {isOpen && (
        <div className={styles.innerContainer}>
          <button
            onClick={() => {
              toggleModal();
              setIsOpen((prev) => !prev);
              changeModalComponent(<Modal habitToUpdate={habit} />);
            }}
          >
            Edit Habit
          </button>
          <button
            onClick={() => {
              toggleModal();
              setIsOpen((prev) => !prev);
              changeModalComponent(
                <Dialog
                  onCancel={toggleModal}
                  onConfirm={() => {
                    dispatch({ type: 'DELETE', payload: habit });
                    toggleModal();
                  }}
                />,
              );
            }}
          >
            Delete Habit
          </button>
        </div>
      )}
    </div>
  );
};

export default HabitPopover;
