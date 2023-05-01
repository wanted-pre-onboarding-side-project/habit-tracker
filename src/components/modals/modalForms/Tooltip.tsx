import { useModalHandleContext } from 'contexts/ModalContext';
import styles from '../ModalContainer.module.css';

const Tooltip = () => {
  const { openModal } = useModalHandleContext();

  return (
    <div className={styles.TooltipModal}>
      <button onClick={() => openModal('update')}>edit</button>
      <button onClick={() => openModal('delete')}>delete</button>
    </div>
  );
};

export default Tooltip;
