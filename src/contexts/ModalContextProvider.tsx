import { useState, ReactNode } from 'react';
import { ModalStateContext, ModalHandleContext } from './ModalContext';

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalComponent, setModalComponent] = useState(<></>);

  const openModal = (modal: JSX.Element) => {
    setIsModalOpen(true);
    setModalComponent(modal);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalComponent(<></>);
  };

  return (
    <ModalStateContext.Provider value={{ isModalOpen, modalComponent }}>
      <ModalHandleContext.Provider value={{ openModal, closeModal }}>
        {children}
      </ModalHandleContext.Provider>
    </ModalStateContext.Provider>
  );
};

export default ModalProvider;
