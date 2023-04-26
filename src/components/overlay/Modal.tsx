import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const [modalClassNames, setModalClassNames] = useState([
    styles.modalContainer,
  ]);

  // TODO  : slide in 애니메이션 적용
  useEffect(() => {
    if (!isOpen) {
      setModalClassNames((prev) => [...prev, styles.open]);
    }
  }, [isOpen]);

  const removeModalOpenClassname = () => {
    setModalClassNames((prev) =>
      prev.filter((classname) => classname !== styles.open),
    );
  };

  const closeModal = () => {
    removeModalOpenClassname();
    onClose();
  };

  if (!isOpen) return null;
  return createPortal(
    <div className={modalClassNames.join(' ')} onClick={closeModal}>
      <div
        className={styles.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
        <button onClick={closeModal}>close</button>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
