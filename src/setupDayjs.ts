import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import 'dayjs/locale/ko';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.locale('ko');
dayjs.extend(updateLocale);
dayjs.updateLocale('ko', {
  weekStart: 1, // 첫 주의 시작을 월요일로 설정
});
dayjs.extend(isSameOrBefore);
