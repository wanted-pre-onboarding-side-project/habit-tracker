import { HandleHabitInputProps } from './props';

export interface HabitsHandlersContextType {
  handleHabitInput: ({
    id,
    payload,
    actionType,
  }: HandleHabitInputProps) => void;
  clearHabitInput: () => void;
  handleHabitSubmit: (id?: Habit['id']) => boolean;
  handleDeleteHabit: (id: Habit['id']) => void;
}
