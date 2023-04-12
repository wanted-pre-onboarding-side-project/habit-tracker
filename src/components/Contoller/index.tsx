import useSelectWeekRange from "../../hooks/useSelectWeekRange";
import styles from "./styles.module.css";

const Controller = () => {
  const { selectedWeekRange, changeWeekRange, isDisabledToClickNextWeek } =
    useSelectWeekRange();

  return (
    <div className={styles.weekController}>
      <div className={styles.weekSelector}>
        <button
          className={styles.weekSelectorButton}
          onClick={() => changeWeekRange("back")}
        >
          {"<"}
        </button>
        <button
          className={styles.weekSelectorButton}
          onClick={() => changeWeekRange("forward")}
          disabled={isDisabledToClickNextWeek}
        >
          {">"}
        </button>
      </div>
      <h2 className={styles.weekIndicator}>{selectedWeekRange}</h2>
    </div>
  );
};

export default Controller;
