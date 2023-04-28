import {
  HABIT_NAME_MIN_LENGTH,
  HABIT_NAME_MAX_LENGTH,
  HABIT_DESC_MIN_LENGTH,
  HABIT_DESC_MAX_LENGTH,
} from 'constant';
import type { Habit, Day } from 'interface/main';

/** min, max 값과 같아도 유효합니다.*/
const isValidWordsLength = (words: string, min: number, max: number) => {
  if (words.length < min) return false;
  if (words.length > max) return false;
  return true;
};

const isEmptyDays = (days: Day[]) => {
  if (days.length === 0) return true;
  return false;
};

const getHabitValidityReport = (
  habit: Omit<Habit, 'id' | 'createdAt'>,
): string | null => {
  const { name, description: desc, days } = habit;
  if (!isValidWordsLength(name, HABIT_NAME_MIN_LENGTH, HABIT_NAME_MAX_LENGTH))
    return `이름은 ${HABIT_NAME_MIN_LENGTH}글자 이상 ${HABIT_NAME_MAX_LENGTH}글자 이하여야 합니다.`;
  if (!isValidWordsLength(desc, HABIT_DESC_MIN_LENGTH, HABIT_DESC_MAX_LENGTH))
    return `상세 내용은 ${HABIT_DESC_MAX_LENGTH}글자 이하여야 합니다.`;
  if (isEmptyDays(days)) return `요일은 1개 이상 선택해야 합니다.`;

  return null;
};

export const isValid = (habit: Habit | Omit<Habit, 'id' | 'createdAt'>) => {
  const validatorReport = getHabitValidityReport(habit);
  if (validatorReport) {
    alert(validatorReport);
  } else return true;
};
