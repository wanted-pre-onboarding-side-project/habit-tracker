import { useModalHandleContext } from 'contexts/ModalContext';

const Tooltip = () => {
  const { openModal } = useModalHandleContext();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button onClick={() => openModal('update')}>edit</button>
      <button>delete</button>
    </div>
  );
};

export default Tooltip;
