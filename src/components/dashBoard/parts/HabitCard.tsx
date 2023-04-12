// props Omit<Habit, 'days'>
// habit.id : dispatch 액션에 넣어준다.
// habit.name
// habit.desc
const HabitCard = () => {
  //  habit.id로 dispatch done or undone
  //  habit.desc로 open close toggle (isLongDesc 상태값)
  //
  //  habit.id랑 오늘 날짜 값으로 record도 가져와야겠네.

  return (
    <div>
      <div>habit name</div>
      <div>habit desc</div>
      <button>toggle: habit Done or Undone</button>
      <button>toggle: desc Open or Close</button>
    </div>
  );
};

export default HabitCard;
