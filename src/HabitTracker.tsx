import "./HabitTracker.css";
import Header from "components/Header";
import Controller from "components/controller/Controller";
import DashBoard from "components/dashBoard/Dashboard";
import TempHabitCreateForm from "components/temporary/TempHabitCreateForm";
import TempHabitList from "components/temporary/TempHabitList";

const HabitTracker = () => {
  return (
    <div className="HabitTracker">
      <Header />
      <Controller />
      <DashBoard />
      <div>
        <TempHabitCreateForm />
        <TempHabitList />
      </div>
    </div>
  );
};

export default HabitTracker;
