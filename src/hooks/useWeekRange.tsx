import React from "react";
import { getWeekRangeByDate } from "../helpers/getWeekRangeByDate";
import { getManipulatedDate } from "../helpers/dateUtils";
import { getFirstDateOfWeekByDate } from "../helpers/getFormattedDate";

const useSelectWeekRange = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const weekRange = getWeekRangeByDate(selectedDate);
  const isDisabledToClickNextWeek =
    getFirstDateOfWeekByDate(new Date()) ===
    getFirstDateOfWeekByDate(selectedDate);

  const changeToPrevRange = () => {
    setSelectedDate(getManipulatedDate(selectedDate, "weekBefore"));
  };

  const changeToNextRange = () => {
    setSelectedDate(getManipulatedDate(selectedDate, "weekAfter"));
  };

  return {
    weekRange,
    changeToPrevRange,
    changeToNextRange,
    isDisabledToClickNextWeek,
  };
};

export default useSelectWeekRange;
