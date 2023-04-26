import Controller from 'components/controller/Controller';
import DashBoard from 'components/dashBoard/Dashboard';
import HabitList from 'components/habits/HabitList';
import Header from 'components/Header';
import './HabitTracker.css';

const HabitTracker = () => {
  return (
    <div className="HabitTracker HabitTrackerLayout">
      <Header />
      <Controller />
      <HabitList />
      <DashBoard />
    </div>
  );
};

export default HabitTracker;
