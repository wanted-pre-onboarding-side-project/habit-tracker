import { Day, Habit } from "./main";

export interface ObjectifiedDate {
  year: number;
  month: number;
  date: number;
  day: number;
  dayWord: Day;
  hour: number;
  minute: number;
}

export type PeriodContextType = {
  start: ObjectifiedDate;
  end: ObjectifiedDate;
} | null;

export type PeriodHandleContextType =
  | ((direction: "prev" | "next") => void)
  | null;

export type ModalContextType = boolean | null;

export type ModalHandleContextType = (() => void) | null;

export type HabitContextType = Habit[];
export type HabitHandleContextType =
  | ((newHabit: Omit<Habit, "id">) => void)
  | null;
