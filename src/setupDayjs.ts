import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/ko";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);
dayjs.locale("ko");
dayjs.extend(updateLocale);
dayjs.updateLocale("ko", {
  weekStart: 1,
});
