import { Habit } from './habit';

export interface HabitNameCardProps extends Pick<Habit, 'id' | 'name'> {
  isUpdating: boolean;
}

export interface HabitDetailProps
  extends Pick<Habit, 'id' | 'days' | 'description'> {
  isUpdating: boolean;
}

export interface DaysSelectFormProps extends Pick<Habit, 'id'> {
  currentDays: Habit['days'];
}

export interface HabitControllerProps extends Pick<Habit, 'id'> {
  isUpdating: boolean;
}
