import Header from 'components/Header/Header';
import Controller from 'components/Controller/Controller';
import DashBoard from 'components/Dashboard/Dashboard';
import HabitList from 'components/HabitList/HabitList';
import TempHabitCreateForm from 'components/temporary/TempHabitCreateForm';
import styles from './HabitTracker.module.css';

const HabitTracker = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Header />
        <Controller />
        <HabitList />
        <TempHabitCreateForm />
      </div>
      <DashBoard />
    </div>
  );
};

export default HabitTracker;
