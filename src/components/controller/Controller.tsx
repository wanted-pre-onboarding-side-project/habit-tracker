import AddHabitBtn from './parts/AddHabitBtn';
import NavBtn from './parts/NavBtn';
import Period from './parts/Period';
import ProgressBar from './parts/ProgressBar';
import styles from './Controller.module.css';

const Controller = () => {
  return (
    <div className={`${styles.HabitController} HabitControllerLayout`}>
      <AddHabitBtn />
      <NavBtn />
      <Period />
      <ProgressBar />
    </div>
  );
};

export default Controller;
