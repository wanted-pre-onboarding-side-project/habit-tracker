import type { Day, Habit } from './main';

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

export type PeriodContextType = {
  start: ObjectifiedDate;
  end: ObjectifiedDate;
} | null;

export type PeriodHandleContextType =
  | ((direction: 'prev' | 'next') => void)
  | null;

export type ModalContextType = 'create' | 'update' | 'delete' | null;
export type ModalHandleContextType = {
  openModal: (modalType: ModalContextType) => void;
  closeModal: () => void;
} | null;

export type TooltipContextType = Habit['id'] | null;
export type TooltipHandleContextType = React.Dispatch<
  React.SetStateAction<Habit['id'] | null>
> | null;

export type HabitHandleContextType = {
  createHabit: (newHabitContent: Omit<Habit, 'id' | 'createdAt'>) => void;
  updateHabit: (updatingHabitContent: Habit) => void;
  deleteHabit: (habitId: Habit['id']) => void;
} | null;

export type RecordHandleContextType = {
  checkDay: (habitId: Habit['id'], day: Day) => void;
  unCheckDay: (habitId: Habit['id'], day: Day) => void;
  modifyRecord: (habitId: Habit['id'], updatedDays: Day[]) => void;
  deleteRecord: (habitId: Habit['id']) => void;
} | null;
