import React from "react";
import { getWeekRangeByDate } from "../helpers/getWeekRangeByDate";
import { calculateDateByWeek } from "../helpers/calculateDateByWeek";
import { getFirstDateOfWeekByDate } from "../helpers/getFormattedDate";

const useSelectWeekRange = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const selectedWeekRange = getWeekRangeByDate(selectedDate);
  const isDisabledToClickNextWeek =
    getFirstDateOfWeekByDate(new Date()) ===
    getFirstDateOfWeekByDate(selectedDate);

  const changeWeekRange = (direction: "back" | "forward") => {
    setSelectedDate(calculateDateByWeek(selectedDate, direction));
  };

  return { selectedWeekRange, changeWeekRange, isDisabledToClickNextWeek };
};

export default useSelectWeekRange;
