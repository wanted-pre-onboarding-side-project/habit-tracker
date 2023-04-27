import { GoPlus } from 'react-icons/go';
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
        <GoPlus size={18} />
        <span>습관 추가하기</span>
      </button>
    </>
  );
};

export default AddHabitBtn;
