import styles from './Dialog.module.css';

const Dialog = ({
  onCancel,
  onConfirm,
}: {
  onCancel: () => void;
  onConfirm: () => void;
}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h3 className={styles.title}>정말 삭제하시겠습니까?</h3>
        <p className={styles.description}>삭제 후 다시 복구 할 수 없습니다.</p>
        <div className={styles.buttonContainer}>
          <button onClick={onCancel}>취소</button>
          <button onClick={onConfirm}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
