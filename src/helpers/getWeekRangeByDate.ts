import dayjs from "dayjs";

export const getWeekRangeByDate = (date: Date) => {
  const startOfWeek = dayjs(date).startOf("week").format("dddd, MMM D");
  const endOfWeek = dayjs(date).endOf("week").format("dddd, MMM D");

  return `${startOfWeek} ~ ${endOfWeek}`;
};
