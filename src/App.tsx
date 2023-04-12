import './App.css';
import AddHabitButton from './components/AddHabitButton';
import PeriodControl from './components/PeriodControl';
import TodayHabits from './components/TodayHabits';
import WeeklyProgressDisplay from './components/WeeklyProgressDisplay';

const App = () => {
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
          <WeeklyProgressDisplay />
          {/* // TODO : HabitList는 다음에 진행 */}
          {/* <HabitList /> */}
        </section>
      </main>

      <aside className="side-container">
        <section className="today-habits-container">
          <h2>Habit today</h2>
          <TodayHabits />
        </section>
      </aside>
    </div>
  );
};

export default App;
