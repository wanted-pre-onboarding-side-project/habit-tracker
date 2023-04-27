import { ALL_DAYS } from 'constant';

const ALL_DAYS_ = [...ALL_DAYS] as const;
export type Day = (typeof ALL_DAYS_)[number];

export interface Habit {
  id: number;
  name: string;
  description: string;
  days: Day[];
}

export interface WeekRecord {
  habitId: Habit['id'];
  checkedDays: Partial<{ [key in Day]: boolean }>;
}
