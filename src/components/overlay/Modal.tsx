import { useModalHandle } from 'contexts/ModalContext';
import { useEffect, useState } from 'react';
import styles from './Modal.module.css';

const Modal = () => {
  const toggleModal = useModalHandle();

  const { modalClassNames, removeModalOpenClassname } = useModalClassname();

  const closeModal = () => {
    removeModalOpenClassname();
    toggleModal();
  };

  return (
    <>
      <div className={styles.backdrop} onClick={closeModal} />
      <div className={modalClassNames}>
        this is Modal
        <button onClick={closeModal}>close</button>
      </div>
    </>
  );
};

export default Modal;

// TODO : hook 분리
const useModalClassname = () => {
  const [modalClassNames, setModalClassNames] = useState([
    styles.modalContainer,
  ]);
  useEffect(() => {
    setModalClassNames((prev) => [...prev, styles.open]);
  }, []);

  const removeModalOpenClassname = () => {
    setModalClassNames((prev) =>
      prev.filter((classname) => classname !== styles.open),
    );
  };

  return {
    modalClassNames: modalClassNames.join(' '),
    removeModalOpenClassname,
  };
};
