import type { Habit, Day } from './main';

export type habitActionType =
  | { type: 'CREATE'; value: Omit<Habit, 'id'> }
  | { type: 'UPDATE'; value: Habit }
  | { type: 'DELETE'; value: Habit['id'] };

export type recordActionType =
  | { type: 'CREATE'; value: { habitId: Habit['id']; days: Day[] } }
  | { type: 'MODIFY'; value: { habitId: Habit['id']; updatedDays: Day[] } }
  | {
      type: 'CHECK';
      value: { habitId: Habit['id']; day: Day };
    }
  | {
      type: 'UN_CHECK';
      value: { habitId: Habit['id']; day: Day };
    }
  | { type: 'DELETE'; value: Habit['id'] };
