import { AiOutlineMore } from 'react-icons/ai';
import Modal from 'components/Modal/Modal';
import DeleteDialog from 'components/Dialog/DeleteDialog';
import styles from './Popover.module.css';
import usePopover from './usePopover';
import type { Habit } from 'interface/main';

const HabitPopover = ({ habit }: { habit: Habit }) => {
  const { isOpen, togglePopover, openModal } = usePopover();

  return (
    <div className={styles.container}>
      <button className={styles.toggleButton} onClick={togglePopover}>
        <AiOutlineMore size={24} />
      </button>
      {isOpen && (
        <div className={styles.innerContainer}>
          <button
            onClick={() => {
              togglePopover();
              openModal(<Modal habitToUpdate={habit} />);
            }}
          >
            Edit Habit
          </button>
          <button
            onClick={() => {
              togglePopover();
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