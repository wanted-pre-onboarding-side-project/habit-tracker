import Header from 'components/Header/Header';
import Controller from 'components/Controller/Controller';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import HabitList from 'components/HabitList/HabitList';
import DashBoard from 'components/Dashboard/Dashboard';
import styles from './HabitTracker.module.css';

const HabitTracker = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Header />
        <Controller />
        <ProgressBar />
        <HabitList />
      </div>
      <DashBoard />
    </div>
  );
};

export default HabitTracker;
