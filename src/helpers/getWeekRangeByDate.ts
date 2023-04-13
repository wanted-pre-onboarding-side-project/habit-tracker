import dayjs from "dayjs";

export const getWeekRangeByDate = (date: Date) => {
  const startOfWeek = dayjs(date).startOf("week").format("dddd, MMM D[일]");
  const endOfWeek = dayjs(date).endOf("week").format("dddd, MMM D[일]");

  return `${startOfWeek} ~ ${endOfWeek}`;
};
