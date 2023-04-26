import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import isBetween from 'dayjs/plugin/isBetween';
import 'dayjs/locale/ko';

dayjs.extend(updateLocale);
dayjs.extend(isBetween);

dayjs.locale('ko');
dayjs.updateLocale('ko', {
  weekStart: 1, // 첫 주의 시작을 월요일로 설정
});
