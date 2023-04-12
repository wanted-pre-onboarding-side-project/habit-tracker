import mockdata from "../../mock/data.json";
import styles from "./DashBoard.module.css";
import DashBoardItem from "./DashBoardItem";

const DashBoard = () => {
  return (
    <div className={styles.container}>
      {mockdata.length === 0 ? (
        <button>습관 추가하기</button>
      ) : (
        mockdata.map((item) => <DashBoardItem key={item.id} data={item} />)
      )}
    </div>
  );
};

export default DashBoard;
