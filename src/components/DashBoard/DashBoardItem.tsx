import { getToday } from "../../helpers/getToday";
import styles from "./DashBoard.module.css";

type DashBoardItemProps = {
  data: {
    id: number;
    title: string;
    description: string;
    habitDays: string[];
    checkDays: string[];
  };
};

const today = getToday();
const DashBoardItem = ({ data }: DashBoardItemProps) => {
  return (
    <div className={styles.itemBox}>
      <h2 className={styles.itemTitle}>{data.title}</h2>
      <p className={styles.itemDescription}>{data.description}</p>
      <button className={styles.itemMoreButton}>더보기</button>
      <button className={styles.itemCheckButton}>
        {data.checkDays.includes(today) ? "취소" : "완료하기"}
      </button>
    </div>
  );
};

export default DashBoardItem;
