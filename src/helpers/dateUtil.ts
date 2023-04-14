import dayjs from 'dayjs';
import { Day } from '../service/types';

const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';

/**
 * 기준날짜로부터 1주 전 날짜를 YYYY-MM-DD 형태의 문자열로 반환
 * @param currentDate string | Date 기준 날짜
 * @returns YYYY-MM-DD 형태의 문자열
 */
export const getDateStringAWeekBefore = (currentDate: string | Date) => {
  return dayjs(currentDate).subtract(1, 'week').format(DEFAULT_DATE_FORMAT);
};

/**
 * 기준날짜로부터 1주 후 날짜를 YYYY-MM-DD 형태의 문자열로 반환
 * @param {string | Date} currentDate 기준 날짜
 * @returns YYYY-MM-DD 형태의 문자열
 */
export const getDateStringAWeekAfter = (currentDate: string | Date) => {
  return dayjs(currentDate).add(1, 'week').format(DEFAULT_DATE_FORMAT);
};

/**
 * current 날짜가 start <= current <= end 인지 (시작날짜, 마지막날짜 포함) boolean 형태로 리턴
 * @param {string | Date} currentDate 기준 날짜
 * @param {string | Date} start 비교할 기간 시작 날짜
 * @param {string | Date} end 비교할 기간 마지막 날짜
 * @returns
 */
export const isDateBetween = (
  current: string | Date,
  { start, end }: { start: string | Date; end: string | Date },
) => {
  return dayjs(current).isBetween(start, end, null, '[]');
};

/**
 * YYYY-MM-DD 형태의 오늘 날짜 반환
 */
export const getTodayDateString = () => {
  return dayjs().format(DEFAULT_DATE_FORMAT);
};

/**
 * 오늘의 요일 ("월" | "화" | "수" | "목" | "금" | "토" | "일") 리턴
 * @return Day
 */
export const getDayOfToday = () => {
  return dayjs().format('dd') as Day;
};

/**
 * 기준날짜가 포함된 주의 첫째날(월요일)을 YYYY-MM-DD형태의 문자열로 반환
 * @param  { string | Date} currentDate 기준 날짜
 */
export const getFirstDateStringOfWeek = (currentDate: string | Date) => {
  return dayjs(currentDate).startOf('week').format('YYYY-MM-DD');
};

/**
 * 기준날짜가 포함된 주의 마지막 날(일요일)을 YYYY-MM-DD형태의 문자열로 반환
 * @param  { string | Date} currentDate 기준 날짜
 */
export const getLastDateStringOfWeek = (currentDate: string | Date) => {
  return dayjs(currentDate).endOf('week').format('YYYY-MM-DD');
};
