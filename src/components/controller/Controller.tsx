import AddHabitBtn from './parts/AddHabitBtn';
import NavBtn from './parts/NavBtn';
import Period from './parts/Period';
import ProgressBar from './parts/ProgressBar';

const Controller = () => {
  return (
    <div className="HabitControllerLayout">
      <NavBtn />
      <AddHabitBtn />
      <Period />
      <ProgressBar />
    </div>
  );
};

export default Controller;
