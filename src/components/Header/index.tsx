import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>습관 리스트</h1>
      <button type="button" className={styles.addButton}>
        + 습관 추가하기
      </button>
    </div>
  );
};

export default Header;
