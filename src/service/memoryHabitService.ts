import {
  Day,
  HabitCheckChangeDataType,
  HabitCreateDataType,
  HabitService,
  HabitType,
} from '../contexts/HabitContextProvider';

const dummyHabits: HabitType[] = [
  {
    id: 1,
    name: 'desc length 100 habit',
    description:
      '우호급 유잣을 럮나 믄디기는 곤랄놔손인 일티뎌 너스친라가 치오 힐됴며 혈푸뎡주긍으로 기쩌 얼캔을 산뇡뇌브에 랗굘누으는 판사아 덴순으니 눈란다 늘잘스봐를 거안음 한신너안멍노에서 겔.',
    days: ['월', '화', '수', '목', '금'],
    checks: [],
  },
  {
    id: 2,
    name: 'short desc habit',
    description: '혈푸뎡주긍으로 기쩌 얼캔을 산뇡뇌브에 랗굘누으는.',
    days: ['토', '일'],
    checks: [],
  },
];

let habits: HabitType[] = dummyHabits;

const memoryHabitService: HabitService = {
  addHabit: (habit: HabitCreateDataType) => {
    habits = [...habits, { id: habits.length + 1, checks: [], ...habit }];
  },
  changeHabitCheck: ({ id, date, value }: HabitCheckChangeDataType) => {
    habits = habits.map((habit) => {
      if (habit.id !== id) return habit;

      const newChecks =
        value === true
          ? Array.from(new Set([...habit.checks, date]))
          : habit.checks.filter((checkedDate) => checkedDate !== date);
      return { ...habit, checks: newChecks };
    });
  },
  getHabitsByDay: (day: Day) => {
    return habits.filter((habit) => habit.days.includes(day));
  },
};

export default memoryHabitService;
