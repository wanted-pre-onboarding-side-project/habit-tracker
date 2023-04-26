import Dialog from 'components/overlay/Dialog';
import { useHabitsHandle } from 'contexts/HabitContext';
import { Habit } from 'interface/main';
import { useState } from 'react';
import styles from '../HabitList.module.css';

const HabitContextMenu = ({
  closeContextMenu,
  habit,
}: {
  closeContextMenu: () => void;
  habit: Habit;
}) => {
  const { handleDeleteHabit } = useHabitsHandle();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = () => {
    setIsDialogOpen(false);
    closeContextMenu();
  };

  const deleteHabit = () => {
    handleDeleteHabit(habit.id);
    closeDialog();
  };

  return (
    <div className={styles.habitContextMenuContainer}>
      <button>수정</button>
      <button onClick={() => setIsDialogOpen(true)}>삭제</button>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
        <div>
          <p> {habit.name}을 정말로 삭제하시겠습니까?</p>
          <p> 삭제한 습관은 복구할 수 없습니다</p>
          <div>
            <button onClick={deleteHabit}>확인</button>
            <button onClick={closeDialog}>취소</button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default HabitContextMenu;
