import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import updateLocale from 'dayjs/plugin/updateLocale';
import weekday from 'dayjs/plugin/weekday';
import 'dayjs/locale/ko';

dayjs.extend(updateLocale);
dayjs.extend(weekday);
dayjs.extend(isBetween);

dayjs.locale('ko');

dayjs.updateLocale('ko', {
  weekStart: 1, // 첫 주의 시작을 월요일로 설정
});
