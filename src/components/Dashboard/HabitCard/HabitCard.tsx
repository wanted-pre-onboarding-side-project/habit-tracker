import HabitPopover from 'components/Popover/Popover';
import styles from './HabitCard.module.css';
import useHabitCard from './useHabitCard';
import type { Habit } from 'interface/main';

const HabitCard = ({ habit }: { habit: Habit }) => {
  const {
    cardRef,
    isLongToFold,
    isFold,
    toggleFold,
    foldButtonContent,
    completed,
    toggleComplete,
    completeButtonContent,
  } = useHabitCard(habit);

  return (
    <div ref={cardRef} className={styles.container} data-completed={completed}>
      <div className={styles.header}>
        <h2 className={styles.title}>{habit.name}</h2>
        <HabitPopover habit={habit} />
      </div>
      <p
        className={
          isFold && isLongToFold ? styles.descriptionFolded : styles.description
        }
      >
        {habit.description}
      </p>
      {isLongToFold && (
        <button onClick={toggleFold} className={styles.foldButton}>
          {foldButtonContent}
        </button>
      )}
      <button className={styles.completeToggleButton} onClick={toggleComplete}>
        {completeButtonContent}
      </button>
    </div>
  );
};

export default HabitCard;
