import React from 'react';
import { useModalHandleContext } from 'contexts/ModalContext';

function usePopover() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { toggleModal, changeModalComponent } = useModalHandleContext();

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  const openModal = (modalComponent: JSX.Element) => {
    toggleModal();
    togglePopover();
    changeModalComponent(modalComponent);
  };

  return { isOpen, togglePopover, openModal };
}

export default usePopover;
