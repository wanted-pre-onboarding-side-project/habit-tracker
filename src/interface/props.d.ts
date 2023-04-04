import { Habit } from './main';

export type NewHabit = Pick<Habit, 'name' | 'days' | 'description'>;
