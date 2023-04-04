export interface HabitManager {
  getHabits({ year, month }: Period): Promise<HabitsResponse>;
  createHabit(content: HabitCreateContent): Promise<Habit>;
  deleteHabit(id: Habit['id']): Promise<boolean>;
  updateHabitDetail(content: HabitDetailUpdateContent): Promise<Habit>;
  updateHabitCheck(content: HabitCheckUpdateContent): Promise<boolean>;
}

export interface Habit {
  id: number;
  name: string;
  description: string;
  dates: Day[];
}

export interface HabitsResponse {
  habits: Habit[];
  checks: { [k: Habit['id']]: HabitCheck[] };
}

export interface HabitCreateContent extends Period {
  name: Habit['name'];
  description?: Habit['description'];
  dates?: Habit['dates'];
}

export interface HabitDetailUpdateContent extends HabitCreateContent {
  id: Habit['id'];
}

export interface HabitCheckUpdateContent extends Period {
  id: Habit['id'];
  day: number;
  check: HabitCheck;
}

export type Period = {
  year: number;
  month: number;
};

export type HabitCheck = undefined | 'done';

type Day = '월' | '화' | '수' | '목' | '금' | '토' | '일';
