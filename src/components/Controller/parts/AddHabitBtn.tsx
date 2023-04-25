import { useModalHandleContext } from 'contexts/ModalContext';
import Modal from 'components/Modal/Modal';
import styles from '../Controller.module.css';

const AddHabitBtn = () => {
  const toggleModal = useModalHandleContext();

  return (
    <>
      <button className={styles.addHabitBtn} onClick={toggleModal}>
        + 습관 추가하기
      </button>
      <Modal />
    </>
  );
};

export default AddHabitBtn;
