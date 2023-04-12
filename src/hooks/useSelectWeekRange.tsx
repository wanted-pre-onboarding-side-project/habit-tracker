import React from "react";
import { getWeekRangeByDate } from "../helpers/getWeekRangeByDate";

const useSelectWeekRange = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const selectedWeekRange = getWeekRangeByDate(selectedDate);

  const changeWeekRange = (direction: "back" | "forward") => {
    if (direction === "back") {
      const lastWeek = new Date();
      lastWeek.setDate(selectedDate.getDate() - 7);
      setSelectedDate(lastWeek);
    } else {
      const nextWeek = new Date();
      nextWeek.setDate(selectedDate.getDate() + 7);
      setSelectedDate(nextWeek);
    }
  };

  return { selectedWeekRange, changeWeekRange };
};

export default useSelectWeekRange;
