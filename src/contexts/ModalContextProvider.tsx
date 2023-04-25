import { useState, ReactNode, useCallback } from 'react';
import { ModalStateContext, ModalHandleContext } from './ModalContext';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = useCallback(() => setIsModalOpen((prev) => !prev), []);

  return (
    <ModalStateContext.Provider value={isModalOpen}>
      <ModalHandleContext.Provider value={toggleModal}>
        {children}
      </ModalHandleContext.Provider>
    </ModalStateContext.Provider>
  );
};
