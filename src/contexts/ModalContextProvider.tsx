import { useState, ReactNode, useCallback } from 'react';
import { ModalStateContext, ModalHandleContext } from './ModalContext';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalComponent, setModalComponent] = useState(<div />);
  const toggleModal = useCallback(() => setIsModalOpen((prev) => !prev), []);
  const changeModalComponent = (component: React.ReactElement) => {
    setModalComponent(component);
  };

  return (
    <ModalStateContext.Provider value={{ isModalOpen, modalComponent }}>
      <ModalHandleContext.Provider
        value={{ toggleModal, changeModalComponent }}
      >
        {children}
      </ModalHandleContext.Provider>
    </ModalStateContext.Provider>
  );
};
