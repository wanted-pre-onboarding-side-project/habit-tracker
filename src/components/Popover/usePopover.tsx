import React from 'react';
import { useModalHandleContext } from 'contexts/ModalContext';

function usePopover() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { toggleModal, changeModalComponent } = useModalHandleContext();

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const openModal = (modalComponent: JSX.Element) => {
    toggleModal();
    toggleOpen();
    changeModalComponent(modalComponent);
  };

  return { isOpen, toggleOpen, openModal };
}

export default usePopover;
