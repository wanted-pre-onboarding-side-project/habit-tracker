import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  weekStart: 1,
});

export const getWeekRangeByDate = (date: Date) => {
  const startOfWeek = dayjs(date).startOf("week").format("dddd, MMM D");
  const endOfWeek = dayjs(date).endOf("week").format("dddd, MMM D");

  return `${startOfWeek} ~ ${endOfWeek}`;
};
