import { Day, Habit, HabitRecord } from './main';

export interface ObjectifiedDate {
  year: number;
  month: number;
  date: number;
  day: number;
  dayWord: Day;
  hour: number;
  minute: number;
  origin: Date;
  yyyymmdd: string;
}

export type PeriodContextType = {
  start: ObjectifiedDate;
  end: ObjectifiedDate;
} | null;

export type PeriodHandleContextType =
  | ((direction: 'prev' | 'next') => void)
  | null;

export type HabitContextType = Habit[];
export type HabitHandleContextType = {
  handleCreateHabit: (newHabit: Omit<Habit, 'id'>) => void;
  handleDeleteHabit: (deleteHabitId: Habit['id']) => void;
} | null;

export type RecordsContextType = HabitRecord[] | null;
export type RecordsHandleContextType =
  | ((recordChangeValue: {
      id: Habit['id'];
      date: string;
      type: 'mark' | 'unmark';
    }) => void)
  | null;
