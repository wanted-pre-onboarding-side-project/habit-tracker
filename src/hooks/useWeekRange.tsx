import React from "react";
import {
  getWeekBeforeDate,
  getWeekRangeByDate,
  getWeekAfterDate,
  isSameWeekRange,
} from "../helpers/dateHelpers";

const useSelectWeekRange = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const weekRange = getWeekRangeByDate(selectedDate);
  const isDisabledToClickNextWeek = isSameWeekRange(new Date(), selectedDate);

  const changeToPrevRange = () => {
    setSelectedDate(getWeekBeforeDate(selectedDate));
  };

  const changeToNextRange = () => {
    setSelectedDate(getWeekAfterDate(selectedDate));
  };

  return {
    weekRange,
    changeToPrevRange,
    changeToNextRange,
    isDisabledToClickNextWeek,
  };
};

export default useSelectWeekRange;
