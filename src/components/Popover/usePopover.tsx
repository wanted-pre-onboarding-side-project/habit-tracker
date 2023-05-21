import React from 'react';
import { useModalHandleContext } from 'contexts/ModalContext';

function usePopover() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { openModal } = useModalHandleContext();

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, togglePopover, openModal };
}

export default usePopover;
