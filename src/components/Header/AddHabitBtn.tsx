import { GoPlus } from 'react-icons/go';
import { useModalHandleContext } from 'contexts/ModalContext';
import AddHabitModal from 'components/Modal/AddHabitModal';
import styles from './Header.module.css';

const AddHabitBtn = () => {
  const { openModal } = useModalHandleContext();

  const handleAddBtn = () => {
    openModal(<AddHabitModal />);
  };

  return (
    <>
      <button className={styles.addHabitBtn} onClick={handleAddBtn}>
        <GoPlus size={18} />
        <span>습관 추가하기</span>
      </button>
    </>
  );
};

export default AddHabitBtn;
