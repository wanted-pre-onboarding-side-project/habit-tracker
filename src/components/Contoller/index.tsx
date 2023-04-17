import useWeekRange from "../../hooks/useWeekRange";
import styles from "./Controller.module.css";

const Controller = () => {
  const {
    weekRange,
    changeToPrevRange,
    changeToNextRange,
    isDisabledToClickNextWeek,
  } = useWeekRange();

  return (
    <div className={styles.weekController}>
      <div className={styles.weekSelector}>
        <button
          className={styles.weekSelectorButton}
          onClick={changeToPrevRange}
        >
          {"<"}
        </button>
        <button
          className={styles.weekSelectorButton}
          onClick={changeToNextRange}
          disabled={isDisabledToClickNextWeek}
        >
          {">"}
        </button>
      </div>
      <h2 className={styles.weekIndicator}>{weekRange}</h2>
    </div>
  );
};

export default Controller;
