import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import updateLocale from 'dayjs/plugin/updateLocale';
import isBetween from 'dayjs/plugin/isBetween';

import 'dayjs/locale/ko';

const setupDayjs = () => {
  dayjs.extend(updateLocale);
  dayjs.extend(weekday);
  dayjs.extend(isBetween);

  dayjs.locale('ko');

  dayjs.updateLocale('ko', {
    weekStart: 1, // 첫 주의 시작을 월요일로 설정
  });
};

export default setupDayjs;
