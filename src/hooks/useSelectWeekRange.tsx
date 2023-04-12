import React from "react";
import { getWeekRangeByDate } from "../helpers/getWeekRangeByDate";
import { calculateDateByWeek } from "../helpers/calculateDateByWeek";

const useSelectWeekRange = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const selectedWeekRange = getWeekRangeByDate(selectedDate);

  const changeWeekRange = (direction: "back" | "forward") => {
    setSelectedDate(calculateDateByWeek(selectedDate, direction));
  };

  return { selectedWeekRange, changeWeekRange };
};

export default useSelectWeekRange;
