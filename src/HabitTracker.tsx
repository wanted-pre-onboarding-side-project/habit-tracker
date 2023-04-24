import Header from 'components/Header/Header';
import Controller from 'components/Controller/Controller';
import DashBoard from 'components/Dashboard/Dashboard';
import TempHabitCreateForm from 'components/temporary/TempHabitCreateForm';
import TempHabitList from 'components/temporary/TempHabitList';
import styles from './HabitTracker.module.css';

const HabitTracker = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Header />
        <Controller />
        <TempHabitCreateForm />
        <TempHabitList />
      </div>
      <DashBoard />
    </div>
  );
};

export default HabitTracker;
