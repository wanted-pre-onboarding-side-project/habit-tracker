import { useHabits } from "contexts/HabitContext";

const TempHabitList = () => {
  const habits = useHabits();

  return (
    <div
      style={{
        border: "solid 2px grey",
        width: "50vw",
        marginTop: "2vh",
        height: "30vh",
        overflowY: "scroll",
      }}
    >
      <h3>temp habit list</h3>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            {habit.name} ===== {habit.days} ===== {habit.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TempHabitList;
