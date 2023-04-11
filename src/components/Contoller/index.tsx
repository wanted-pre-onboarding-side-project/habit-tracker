import styles from "./styles.module.css";

const Controller = () => {
  return (
    <div className={styles.weekController}>
      <div className={styles.weekSelector}>
        <button className={styles.weekSelectorButton}>{"<"}</button>
        <button className={styles.weekSelectorButton}>{">"}</button>
      </div>
      <h2 className={styles.weekIndicator}>Week2</h2>
    </div>
  );
};

export default Controller;
