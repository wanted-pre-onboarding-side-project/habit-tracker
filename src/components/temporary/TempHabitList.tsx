const TempHabitList = () => {
  // context에서 habit 받아와서 그냥 잘 생긴다는 것 보여주기
  const dummyHabit = [1, 2, 3];
  return (
    <div style={{ border: "solid 2px grey", width: "20vw" }}>
      <h3>temp habit list</h3>
      <ul>
        {dummyHabit.map((e) => (
          <li key={e}>habit - {e}</li>
        ))}
      </ul>
    </div>
  );
};

export default TempHabitList;
