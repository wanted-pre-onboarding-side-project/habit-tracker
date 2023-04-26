import Header from 'components/Header';
import Controller from 'components/controller/Controller';
import DashBoard from 'components/dashBoard/Dashboard';
import HabitListTable from 'components/habitListTable/habitListTable';
import TempHabitCreateForm from 'components/temporary/TempHabitCreateForm';
import styles from './HabitTracker.module.css';

const HabitTracker = () => {
  return (
    <div className={`${styles.HabitTracker} HabitTrackerLayout`}>
      <Header />
      <Controller />
      <DashBoard />
      <HabitListTable />
      <div className="tempComponentsLayout">
        <TempHabitCreateForm />
      </div>
    </div>
  );
};

export default HabitTracker;
