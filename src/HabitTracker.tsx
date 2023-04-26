import Controller from 'components/controller/Controller';
import DashBoard from 'components/dashBoard/Dashboard';
import HabitList from 'components/habits/HabitList';
import Header from 'components/Header';
import Overlays from 'components/overlay/Overlays';
import './HabitTracker.css';

const HabitTracker = () => {
  return (
    <div className="HabitTracker HabitTrackerLayout">
      <Header />
      <Controller />
      <HabitList />
      <DashBoard />
      <Overlays />
    </div>
  );
};

export default HabitTracker;
