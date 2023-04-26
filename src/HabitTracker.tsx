import Header from 'components/Header';
import Controller from 'components/controller/Controller';
import DashBoard from 'components/dashBoard/Dashboard';
import TempHabitCreateForm from 'components/temporary/TempHabitCreateForm';
import TempHabitList from 'components/temporary/TempHabitList';
import styles from './HabitTracker.module.css';

const HabitTracker = () => {
  return (
    <div className={`${styles.HabitTracker} HabitTrackerLayout`}>
      <Header />
      <Controller />
      <DashBoard />
      <div className="tempComponentsLayout">
        <TempHabitCreateForm />
        <TempHabitList />
      </div>
    </div>
  );
};

export default HabitTracker;
