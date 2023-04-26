import { Day, Habit } from './main';

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

export type HabitContextType = Habit[];
export type HabitHandleContextType = {
  createHabit: (newHabitContent: Omit<Habit, 'id'>) => void;
  updateHabit: (updatingHabitContent: Habit) => void;
} | null;
