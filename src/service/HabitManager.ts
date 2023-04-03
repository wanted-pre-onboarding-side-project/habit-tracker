export class LocalHabitManager {}

interface HabitManager {
  getHabits({ year, month }: Period): Promise<HabitsResponse>;
  createHabit(content: HabitCreateContent): Promise<Habit>;
  deleteHabit(id: Habit['id']): Promise<boolean>;
  updateHabitDetail(content: HabitDetailUpdateContent): Promise<Habit>;
  updateHabitCheck(content: HabitCheckUpdateContent): Promise<boolean>;
}

interface Habit {
  id: number;
  name: string;
  description: string;
  dates: Day[];
}

interface HabitsResponse {
  habits: Habit[];
  checks: { [k: Habit['id']]: HabitCheck[] };
}

interface HabitCreateContent {
  name: Habit['name'];
  description?: Habit['description'];
  dates?: Habit['dates'];
}

interface HabitCheckUpdateContent extends Period {
  day: number;
  id: Habit['id'];
  check: HabitCheck;
}

type HabitDetailUpdateContent = Partial<Omit<Habit, 'id'>>;

type Period = {
  year: number;
  month: number;
};

type HabitCheck = undefined | 'done';

type Day = '월' | '화' | '수' | '목' | '금' | '토' | '일';
