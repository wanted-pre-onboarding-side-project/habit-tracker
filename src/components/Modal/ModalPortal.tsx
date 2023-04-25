import React from 'react';
import ReactDOM from 'react-dom';
import { useModalStateContext } from 'contexts/ModalContext';

interface Props {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: Props) => {
  const isModalOpen = useModalStateContext();
  const el = document.getElementById('modal-root') as HTMLElement;

  return ReactDOM.createPortal(isModalOpen ? children : null, el);
};

export default ModalPortal;
