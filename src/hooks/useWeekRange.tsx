import React from "react";
import {
  getWeekRangeByDate,
  getFirstDateOfWeekByDate,
} from "../helpers/dateHelpers";
import { getManipulatedDate } from "../utils/dateUtils";

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
