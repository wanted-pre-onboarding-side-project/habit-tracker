export type Day = '월' | '화' | '수' | '목' | '금' | '토' | '일';

export interface Habit {
  id: number;
  name: string;
  description: string;
  routineDays: Day[];
  recordedDates: {
    [key: string]: 'inactive' | 'completed';
  };
}
