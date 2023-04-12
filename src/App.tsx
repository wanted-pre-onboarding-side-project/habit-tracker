import { useState } from 'react';
import './App.css';
import AddHabitButton from './components/AddHabitButton';
import PeriodControl from './components/PeriodControl';
import TodayHabitsContainer from './components/TodayHabitsContainer';
import WeeklyProgressDisplay from './components/WeeklyProgressDisplay';

type Day = '월' | '화' | '수' | '목' | '금' | '토' | '일';
export interface HabitType {
  id: number;
  name: string;
  description: string;
  days: Day[];
  checks: string[]; // yyyy-mm-dd string?? boolean??
}

const dummyHabits = [
  {
    id: 1,
    name: 'desc length 100 habit',
    description:
      '우호급 유잣을 럮나 믄디기는 곤랄놔손인 일티뎌 너스친라가 치오 힐됴며 혈푸뎡주긍으로 기쩌 얼캔을 산뇡뇌브에 랗굘누으는 판사아 덴순으니 눈란다 늘잘스봐를 거안음 한신너안멍노에서 겔.',
    days: ['월'],
    checks: [],
  },
  {
    id: 2,
    name: 'short desc habit',
    description: '혈푸뎡주긍으로 기쩌 얼캔을 산뇡뇌브에 랗굘누으는.',
    days: ['월'],
    checks: ['2023-4-12'],
  },
];

const App = () => {
  const [habits, setHabits] = useState<HabitType[]>([]);

  const weeklyAchievedPercentage = 70;

  // TODO : 오늘 해야하는 습관만 필터
  const todayHabits = habits;

  const startDate = '4월 10일';
  const endDate = '4월 16일';

  const moveToNextWeek = () => {
    // 다음 주 날짜로 변경
    // 다음 주 습관 정보 불러오기
    console.log('move to next');
  };
  const moveToPrevWeek = () => {
    // 이전 주 날짜로 변경
    // 이전 주 습관 정보 불러오기
    console.log('move to prev');
  };

  const openAddModal = () => {
    // 원래는 모달 열어야하지만, 임시로 해빗 생성
    // TODO : 모달 연결
    console.log('open modal');
  };
  return (
    <div className="habit-tracker-app">
      <main className="main-container">
        <section className="main-header">
          <h1>Habit tracker</h1>
        </section>

        <section className="main-controllers">
          <PeriodControl
            startDate={startDate}
            endDate={endDate}
            handleNextButton={moveToNextWeek}
            handlePrevButton={moveToPrevWeek}
          />
          <AddHabitButton onClick={openAddModal} />
        </section>

        <section className="habit-list-container">
          <WeeklyProgressDisplay percentage={weeklyAchievedPercentage} />
          {/* // TODO : HabitList는 다음에 진행 */}
          {/* <HabitList /> */}
        </section>
      </main>

      <aside className="side-container">
        <TodayHabitsContainer todayHabits={todayHabits} />
      </aside>
    </div>
  );
};

export default App;
