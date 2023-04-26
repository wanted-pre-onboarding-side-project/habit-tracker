import Header from 'components/Header';
import Controller from 'components/controller/Controller';
import DashBoard from 'components/dashBoard/Dashboard';
import HabitListTable from 'components/habitListTable/habitListTable';
import ModalContainer from 'components/modals/ModalContainer';
import styles from './HabitTracker.module.css';

const HabitTracker = () => {
  return (
    <div className={`${styles.HabitTracker} HabitTrackerLayout`}>
      <Header />
      <Controller />
      <DashBoard />
      <ModalContainer />
      <HabitListTable />
    </div>
  );
};

export default HabitTracker;
