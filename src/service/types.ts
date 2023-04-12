export interface HabitService {
  getHabitsByPeriod: (startDate: string, endDate: string) => HabitType[];
  getHabitsByDay: (day: Day) => HabitType[];
  addHabit: (habit: HabitCreateDataType) => void;
  changeHabitCheck: ({ id, date, value }: HabitCheckChangeDataType) => void;
}

export type Day = '월' | '화' | '수' | '목' | '금' | '토' | '일';

export interface HabitType {
  id: number;
  name: string;
  description: string;
  days: Day[];
  checks: string[]; // yyyy-mm-dd string
}

export type HabitCreateDataType = Pick<
  HabitType,
  'name' | 'description' | 'days'
>;
export type HabitCheckChangeDataType = {
  id: HabitType['id'];
  date: string;
  value: boolean;
};
