import HabitCard from "./parts/HabitCard";

const DashBoard = () => {
  //  오늘(요일) 데이터 받아서 보여주기
  //  HabitCard props로 habit.id, habit.name, habit.desc
  const todayDue = [1, 2, 3]; // habit[]
  return (
    <div style={{ border: "solid 2px grey", width: "20vw", float: "right" }}>
      <h3>TODAY</h3>

      {todayDue.map((e) => (
        <HabitCard key={e} />
      ))}
    </div>
  );
};

export default DashBoard;
