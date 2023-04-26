import { useModalHandleContext } from 'contexts/ModalContext';
import Modal from 'components/Modal/Modal';
import styles from './Header.module.css';

const AddHabitBtn = () => {
  const { toggleModal, changeModalComponent } = useModalHandleContext();

  return (
    <>
      <button
        className={styles.addHabitBtn}
        onClick={() => {
          toggleModal();
          changeModalComponent(<Modal />);
        }}
      >
        + 습관 추가하기
      </button>
    </>
  );
};

export default AddHabitBtn;
