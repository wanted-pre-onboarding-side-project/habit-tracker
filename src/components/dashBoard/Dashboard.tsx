import { getToday } from "lib/utils/dateUtils";
import { useHabits } from "contexts/HabitContext";
import HabitCard from "./parts/HabitCard";

const DashBoard = () => {
  const habits = useHabits();

  return (
    <div style={{ border: "solid 2px grey", width: "20vw", float: "right" }}>
      <h3>TODAY</h3>

      {habits
        .filter((habit) => habit.days.includes(getToday().dayWord))
        .map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
    </div>
  );
};

export default DashBoard;
