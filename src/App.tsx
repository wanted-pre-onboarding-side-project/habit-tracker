import styles from "./App.module.css";
import Header from "./components/Header";
import Controller from "./components/Contoller";
import ProgressBar from "./components/ProgressBar";
import DashBoard from "./components/DashBoard";

const App = () => {
  return (
    <div className={styles.globalContainer}>
      <div className={styles.leftSection}>
        <Header />
        <Controller />
        <ProgressBar />
      </div>
      <DashBoard />
    </div>
  );
};

export default App;
