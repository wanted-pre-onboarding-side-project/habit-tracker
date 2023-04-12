import dayjs from "dayjs";

export const calculateDateByWeek = (
  date: Date,
  direction: "back" | "forward"
) => {
  return direction === "back"
    ? dayjs(date).subtract(7, "day").toDate()
    : dayjs(date).add(7, "day").toDate();
};
