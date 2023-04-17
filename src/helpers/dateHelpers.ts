import { getFormattedString, getManipulatedDate } from "../utils/dateUtils";

export const getToday = () => {
  return getFormattedString(new Date(), "YYYY-MM-DD");
};

export const getFirstDateOfWeekByDate = (date: Date) => {
  return getFormattedString(
    getManipulatedDate(date, "startOfWeek"),
    "YYYY-MM-DD"
  );
};

export const getWeekRangeByDate = (date: Date) => {
  const startOfWeek = getFormattedString(
    getManipulatedDate(date, "startOfWeek"),
    "dddd, MMM D[일]"
  );
  const endOfWeek = getFormattedString(
    getManipulatedDate(date, "endOfWeek"),
    "dddd, MMM D[일]"
  );

  return `${startOfWeek} ~ ${endOfWeek}`;
};
