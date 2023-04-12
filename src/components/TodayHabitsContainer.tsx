import { useState } from 'react';
import { HabitType } from '../App';
import AddHabitButton from './AddHabitButton';
import './TodayHabitsContainer.css';

interface TodayHabitsContainerProps {
  todayHabits: HabitType[];
}

const TodayHabitsContainer = ({ todayHabits }: TodayHabitsContainerProps) => {
  // 특정일자에 대한 습관 실행 여부를 저장(수정)
  const changeCheckState = ({
    id,
    date,
    done,
  }: {
    id: HabitType['id'];
    date: string;
    done: boolean;
  }) => {
    console.log('change check', {
      id,
      date,
      done,
    });
  };
  return (
    <section className="today-habits-container">
      <h2>Habit today</h2>
      <div className="today-habits">
        {/* // TODO: AddHabitButton 버튼에 openAddModal 함수 전달 */}
        {todayHabits.length === 0 && (
          <AddHabitButton
            onClick={() => {
              console.log('add habit');
            }}
          />
        )}
        {todayHabits.map((habit) => (
          <TodayHabitCard
            key={habit.id}
            id={habit.id}
            name={habit.name}
            description={habit.description}
            isDone={habit.checks.includes('2023-4-12')}
            changeCheckState={() => {
              changeCheckState({
                id: habit.id,
                date: '2023-4-12',
                done: !habit.checks.includes('2023-4-12'),
              });
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default TodayHabitsContainer;

const FOLD_CRITERIA_LENGTH = 50;

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
