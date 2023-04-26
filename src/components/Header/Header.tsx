import AddHabitBtn from './AddHabitBtn';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>안녕하세요! 오늘도 기록해보세요</h1>
      <AddHabitBtn />
    </div>
  );
};

export default Header;
