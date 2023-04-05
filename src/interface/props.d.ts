import { Habit } from './main';

export type HandleHabitInputProps = {
  id?: Habit['id'];
  payload: Habit['name' | 'description'] | { isChecked: boolean; day: Day };
  actionType: 'NAME' | 'DESCRIPTION' | 'DAYS';
};
