import HabitCreateForm from 'components/overlay/HabitCreateForm';
import Modal from 'components/overlay/Modal';
import { useState } from 'react';
import styles from '../Controller.module.css';

const AddHabitBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setTimeout(() => setIsOpen(false), 500);
  };

  return (
    <>
      <button
        className={`${styles.AddHabitBtn} AddHabitBtnLayout`}
        onClick={openModal}
      >
        + 습관 추가하기
      </button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <HabitCreateForm onClose={closeModal} />
      </Modal>
    </>
  );
};

export default AddHabitBtn;
