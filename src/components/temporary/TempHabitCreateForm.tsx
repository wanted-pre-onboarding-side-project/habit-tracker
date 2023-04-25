import { useModal } from 'contexts/ModalContext';
import { useHabitsHandle } from 'contexts/HabitContext';
import { Habit, Day } from 'interface/main';

const TempHabitCreateForm = () => {
  const isModalOpen = useModal();
  const handleCreateHabit = useHabitsHandle();

  if (!isModalOpen) return null;

  return (
    <div style={{ border: 'solid 2px grey', width: '20vw' }}>
      <h3>temp habit form</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}>
        <input placeholder="name random 생성" disabled />
        <textarea placeholder="desc random 생성" disabled />
        <input placeholder="days random 생성" disabled />
        <button onClick={() => handleCreateHabit(makeRandomHabit(true))}>
          Long desc 생성
        </button>
        <button onClick={() => handleCreateHabit(makeRandomHabit(false))}>
          Short desc 생성
        </button>
      </div>
    </div>
  );
};

export default TempHabitCreateForm;

function makeRandomHabit(isLongDesc: boolean): Omit<Habit, 'id'> {
  const randomNum = Math.ceil(Math.random() * 1000);
  const randomDesc = !isLongDesc
    ? '짧은 description 예시.....'
    : '299자 예시입니다. 자습서에서 작은 게임을 만들겁니다. 게임을 만들고 싶지 않아서 자습서를 건너뛰고 싶을 수 있습니다. 그래도 한번 해보세요! 자습서를 통해 React 앱을 만드299자 예시입니다. 자습서에서 작은 게임을 만들겁니다. 게임을 만들고 싶지 않아서 자습서를 건너뛰고 싶을 수 있습니다. 그래도 한번 해보세요! 자습서를 통해 React 앱을 만드99자 예시입니다. 자습서에서 작은 게임을 만들겁니다. 게임을 만들고 싶지 않아서 자습서를 건너뛰고 싶을 수 있습니다. 그래도 한번 해보세요! 자습서를 통해 React 앱을 만드';
  const randomDays = [
    ['월', '화', '수', '목', '금', '토', '일'],
    ['월', '화', '수', '목'],
    ['금', '토', '일'],
  ][Math.ceil(Math.random() * 10) % 3];

  return {
    name: `temp name(${randomNum})`,
    description: randomDesc,
    routineDays: randomDays as Day[],
    recordedDates: {
      '2023-04-22': 'inactive',
      '2023-04-23': 'inactive',
      '2023-04-24': 'inactive',
      '2023-04-25': 'inactive',
    },
  };
}
