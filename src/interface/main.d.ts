export interface Habit {
  id: number;
  name: string;
  description: string;
  dates: Day[]; // 특정 요일에만 진행하는 경우
}

export type Day = '월' | '화' | '수' | '목' | '금' | '토' | '일';
