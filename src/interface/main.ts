import { WEEK_DAYS } from 'constant';

export type Day = (typeof WEEK_DAYS)[number];

export interface Habit {
  id: number;
  name: string;
  description: string;
  routineDays: Day[];
  recordedDates: {
    [key: string]: 'inactive' | 'completed';
  };
}

export interface ObjectifiedDate {
  year: number;
  month: number;
  date: number;
  day: number;
  dayWord: Day;
  hour: number;
  minute: number;
  origin: Date;
}
