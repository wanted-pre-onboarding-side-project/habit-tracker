import { AiOutlineMore } from 'react-icons/ai';
import EditHabitModal from 'components/Modal/EditHabitModal';
import DeleteDialog from 'components/Dialog/DeleteDialog';
import styles from './Popover.module.css';
import usePopover from './usePopover';
import type { Habit } from 'lib/types/main';

const HabitPopover = ({ habit }: { habit: Habit }) => {
  const { isOpen, togglePopover, openModal } = usePopover();

  const handleEditBtn = () => {
    togglePopover();
    openModal(<EditHabitModal habitToUpdate={habit} />);
  };

  const handleDeleteBtn = () => {
    togglePopover();
    openModal(<DeleteDialog habit={habit} />);
  };

  return (
    <div className={styles.container}>
      <button className={styles.toggleButton} onClick={togglePopover}>
        <AiOutlineMore size={24} />
      </button>
      {isOpen && (
        <div className={styles.innerContainer}>
          <button onClick={handleEditBtn}>Edit Habit</button>
          <button onClick={handleDeleteBtn}>Delete Habit</button>
        </div>
      )}
    </div>
  );
};

export default HabitPopover;
