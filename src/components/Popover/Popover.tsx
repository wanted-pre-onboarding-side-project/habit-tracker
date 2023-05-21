import { AiOutlineMore } from 'react-icons/ai';
import Modal from 'components/Modal/Modal';
import DeleteDialog from 'components/Dialog/DeleteDialog';
import styles from './Popover.module.css';
import usePopover from './usePopover';
import type { Habit } from 'interface/main';

const HabitPopover = ({ habit }: { habit: Habit }) => {
  const { isOpen, toggleOpen, openModal } = usePopover();

  return (
    <div className={styles.container}>
      <button className={styles.toggleButton} onClick={toggleOpen}>
        <AiOutlineMore size={24} />
      </button>
      {isOpen && (
        <div className={styles.innerContainer}>
          <button
            onClick={() => {
              openModal(<Modal habitToUpdate={habit} />);
            }}
          >
            Edit Habit
          </button>
          <button
            onClick={() => {
              openModal(<DeleteDialog habit={habit} />);
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
