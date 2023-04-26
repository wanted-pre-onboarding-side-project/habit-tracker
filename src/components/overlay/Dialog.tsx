import { createPortal } from 'react-dom';
import styles from './Dialog.module.css';

const Dialog = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;
  return createPortal(
    <div className={styles.dialog}>{children}</div>,
    document.body,
  );
};

export default Dialog;
