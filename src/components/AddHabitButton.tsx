import { useHabitsAction } from '../contexts/HabitContextProvider';

type AddHabitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const AddHabitButton = (_: AddHabitButtonProps) => {
  const { addHabit } = useHabitsAction();
  // TODO : 나중에 habit create modal open하는 함수로 변경하기
  const onAddHabitButtonClick = () => {
    addHabit({
      name: 'test',
      description: 'test',
      days: ['월', '화', '수', '목', '금', '토', '일'],
    });
  };

  return <button onClick={onAddHabitButtonClick}>습관 추가하기</button>;
};

export default AddHabitButton;
