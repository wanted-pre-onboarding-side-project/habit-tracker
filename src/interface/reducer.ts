import type { Habit, Day, WeekRecord } from './main';

export type habitActionType =
  | { type: 'CREATE'; value: Omit<Habit, 'id' | 'createdAt'> }
  | { type: 'UPDATE'; value: Habit }
  | { type: 'DELETE'; value: Habit['id'] };

export type recordActionType =
  | { type: 'SET_FROM_LOCALSTORAGE'; value: { key: string } }
  | {
      type: 'SYNC_WITH_HABITS';
      value: { habits: Habit[]; periodStart: number };
    }
  | { type: 'MODIFY'; value: { habitId: Habit['id']; updatedDays: Day[] } }
  | { type: 'CHECK'; value: { habitId: Habit['id']; day: Day } }
  | { type: 'UN_CHECK'; value: { habitId: Habit['id']; day: Day } }
  | { type: 'DELETE'; value: { habitId: Habit['id'] } };

export type habitReducerType = (
  state: Habit[],
  action: habitActionType,
) => Habit[];

export type recordReducerType = (
  state: WeekRecord[],
  action: recordActionType,
) => WeekRecord[];
