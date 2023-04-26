import { useModal } from 'contexts/ModalContext';
import { createPortal } from 'react-dom';
import Modal from './Modal';

const Overlays = () => {
  const isModalOpen = useModal();
  return <>{isModalOpen && createPortal(<Modal />, document.body)}</>;
};

export default Overlays;
