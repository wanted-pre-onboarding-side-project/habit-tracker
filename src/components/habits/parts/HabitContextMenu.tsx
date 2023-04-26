import Dialog from 'components/overlay/Dialog';
import HabitEditForm from 'components/overlay/HabitEditForm';
import Modal from 'components/overlay/Modal';
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    closeContextMenu();
  };

  return (
    <div className={styles.habitContextMenuContainer}>
      <button onClick={openModal}>수정</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <HabitEditForm habit={habit} onClose={closeModal} />
      </Modal>
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
