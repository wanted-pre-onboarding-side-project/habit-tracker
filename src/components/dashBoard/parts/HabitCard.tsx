import { useRef, useEffect, useState } from "react";
import { Habit } from "interface/main";
import { TOGGLE_BY_HEIGHT } from "constant";

const HabitCard = ({ habit }: { habit: Habit }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLongToFold, setIsLongToFold] = useState<boolean>(false);
  useEffect(() => {
    if (cardRef.current && cardRef.current.offsetHeight > TOGGLE_BY_HEIGHT)
      setIsLongToFold(true);
  }, []);
  const [isFold, setIsFold] = useState<boolean>(true);
  const [descStyle, setDescStyle] = useState<React.CSSProperties>();
  useEffect(() => {
    const longStyle = {
      height: "10vh",
      textOverflow: "eclipse",
      overflow: "hidden",
    };
    const shortStyle = {
      margin: "5%",
    };
    setDescStyle(isFold ? longStyle : shortStyle);
  }, [isFold]);

  return (
    <div ref={cardRef}>
      <div>{habit.name}</div>
      <div style={descStyle}>{habit.description}</div>
      <button onClick={() => alert("yet no record context")}>완료</button>
      {isLongToFold && (
        <button onClick={() => setIsFold((prev) => !prev)}>
          toggle: desc Open or Close
        </button>
      )}
    </div>
  );
};

export default HabitCard;

//  TODO
//
//  habit.id랑 오늘 날짜 값으로 record도 가져와야겠네.
//  habit.id로 dispatch done or undone
