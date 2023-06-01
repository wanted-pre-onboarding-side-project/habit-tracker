import ReactDOM from 'react-dom';
import { useModalStateContext } from 'contexts/ModalContext';

const ModalPortal = () => {
  const { isModalOpen, modalComponent } = useModalStateContext();
  const el = document.getElementById('modal-root') as HTMLElement;

  return ReactDOM.createPortal(isModalOpen ? modalComponent : null, el);
};

export default ModalPortal;
