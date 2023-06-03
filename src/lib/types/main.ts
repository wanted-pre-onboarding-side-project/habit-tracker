import { WEEK_DAYS } from 'lib/constant/main';

export type Day = (typeof WEEK_DAYS)[number];

export interface Habit {
  id: number;
  name: string;
  description: string;
  routineList: { [key: string]: Day[] };
  completedDates: string[];
}
