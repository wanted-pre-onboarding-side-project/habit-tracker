import { useState } from 'react';
import { Habit } from '../interface/main';

const dummyHabit: Habit = {
  id: 1,
  name: '아침 명상',
  description:
    '아침 7시마마다 10분간 앉아서 호흡에만아침 7시마다 10분간마다 10분간 앉아서 호흡에만아침 7시마다 10분간다 10분간 앉아서 호흡에만아침 7시마다 10분간 앉아서 호흡에만 집중하기 집중하기',
  days: ['월', '수', '화', '목'],
};

export const useHabitData = (): {
  habits: Habit[];
} => {
  const [habits, setHabits] = useState<Habit[]>([dummyHabit]);

  return { habits };
};
