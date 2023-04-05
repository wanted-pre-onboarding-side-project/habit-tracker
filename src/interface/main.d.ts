import { HandleHabitInputProps } from './props';

export interface Habit {
  id: number;
  name: string;
  description: string;
  days: Day[]; // 특정 요일에만 진행하는 경우
}

export type Day = '월' | '화' | '수' | '목' | '금' | '토' | '일';

export interface HabitsHandlersContextType {
  handleHabitInput: ({
    id,
    payload,
    actionType,
  }: HandleHabitInputProps) => void;
  clearHabitInput: () => void;
  handleHabitCreateComplete: () => boolean;
  handleHabitUpdateComplete: (updatedHabit: Habit) => boolean;
  handleDeleteHabit: (id: Habit['id']) => void;
}
