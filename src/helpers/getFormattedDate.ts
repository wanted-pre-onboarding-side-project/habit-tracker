import dayjs from "dayjs";

export const getToday = () => {
  return dayjs().format("YYYY-MM-DD");
};

export const getFirstDateOfWeekByDate = (date: Date) => {
  return dayjs(date).startOf("week").format("YYYY-MM-DD");
};
