import dayjs from "dayjs";

export const getFormattedString = (date: Date, formatString: string) => {
  return dayjs(date).format(formatString);
};

export const getManipulatedDate = (
  date: Date,
  manipulation: "weekBefore" | "weekAfter" | "startOfWeek" | "endOfWeek"
) => {
  switch (manipulation) {
    case "weekBefore":
      return dayjs(date).subtract(1, "week").toDate();

    case "weekAfter":
      return dayjs(date).add(1, "week").toDate();

    case "startOfWeek":
      return dayjs(date).startOf("week").toDate();

    case "endOfWeek":
      return dayjs(date).endOf("week").toDate();
  }
};
