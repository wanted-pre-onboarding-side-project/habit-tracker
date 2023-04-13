import dayjs from 'dayjs';
import { useState } from 'react';
import {
  useHabitsAction,
  useHabitsToday,
} from '../contexts/hooks/useHabitContext';
import { HabitType } from '../service/types';
import AddHabitButton from './AddHabitButton';
import './TodayHabits.css';

const TodayHabits = () => {
  const todayHabits = useHabitsToday();
  const { changeHabitCheck } = useHabitsAction();

  const todayString = dayjs().format('YYYY-MM-DD');

  return (
    <div className="today-habits">
      {todayHabits.length === 0 && <AddHabitButton />}
      {todayHabits.map((habit) => (
        <TodayHabitCard
          key={habit.id}
          id={habit.id}
          name={habit.name}
          description={habit.description}
          isDone={habit.checks.includes(todayString)}
          changeCheckState={() => {
            changeHabitCheck({
              id: habit.id,
              date: todayString,
              value: !habit.checks.includes(todayString),
            });
          }}
        />
      ))}
    </div>
  );
};

export default TodayHabits;

const FOLD_CRITERIA_LENGTH = 40;

interface TodayHabitCardProps extends Omit<HabitType, 'days' | 'checks'> {
  isDone: boolean;
  changeCheckState: () => void;
}
const TodayHabitCard = ({
  name,
  description: fullDesc,
  isDone,
  changeCheckState,
}: TodayHabitCardProps) => {
  const isLongDescription = fullDesc.length > FOLD_CRITERIA_LENGTH;
  const shortDesc = fullDesc.slice(0, FOLD_CRITERIA_LENGTH);

  const [folded, setFolded] = useState(isLongDescription);
  const displayDesc =
    isLongDescription && folded ? `${shortDesc}...` : fullDesc;

  const toggle = () => setFolded((prev) => !prev);

  return (
    <div className={`today-habit-card ${isDone && 'done'}`}>
      <p className="today-habit-name">{name}</p>
      <p className="today-habit-description">{displayDesc}</p>
      {isLongDescription && (
        <button
          className="today-habit-description-read-more-button"
          onClick={toggle}
        >
          {folded ? '자세히' : '접기'}
        </button>
      )}
      <button className="today-habit-check-button" onClick={changeCheckState}>
        {isDone ? '되돌리기' : '완료'}
      </button>
    </div>
  );
};
