import './App.css';
import AddHabitButton from './components/AddHabitButton';
import PeriodControl from './components/PeriodControl';
import TodayHabits from './components/TodayHabits';
import WeeklyProgressDisplay from './components/WeeklyProgressDisplay';

const App = () => {
  return (
    <div className="habit-tracker-app">
      <main className="main-container">
        <section className="main-header">
          <h1 className="main-header-title">Habit tracker</h1>
        </section>

        <section className="main-controllers">
          <PeriodControl />
          <AddHabitButton />
        </section>

        <section className="habit-list-container">
          <WeeklyProgressDisplay />
          {/* // TODO : HabitList는 다음에 진행 */}
          {/* <HabitList /> */}
        </section>
      </main>

      <aside className="side-container">
        <section className="today-habits-container">
          <h2 className="today-habits-section-title">Habit today</h2>
          <TodayHabits />
        </section>
      </aside>
    </div>
  );
};

export default App;
