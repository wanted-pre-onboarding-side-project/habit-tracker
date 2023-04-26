import { Habit } from './main';

export type habitActionType =
  | { type: 'CREATE'; value: Omit<Habit, 'id'> }
  | { type: 'UPDATE'; value: Habit }
  | { type: 'DELETE'; value: Habit['id'] };
