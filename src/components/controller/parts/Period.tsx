import { usePeriod } from "contexts/RecordContext";
import styles from "../Controller.module.css";

const Period = () => {
  const currentPeriod = usePeriod();
  return (
    <p className={`${styles.Period} PeriodLayout`}>
      {`${currentPeriod.start.month}월 ${currentPeriod.start.date}일 ~ ${currentPeriod.end.month}월 ${currentPeriod.end.date}일`}
    </p>
  );
};

export default Period;
