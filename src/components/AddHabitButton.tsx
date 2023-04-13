import { FaPlus } from 'react-icons/fa';
import { useHabitsAction } from '../contexts/hooks/useHabitContext';
import './AddHabitButton.css';

type AddHabitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const AddHabitButton = (_: AddHabitButtonProps) => {
  const { addHabit } = useHabitsAction();

  // 원래는 모달 열어야하지만, 임시로 해빗 생성
  // TODO : 나중에 habit create modal open하는 함수로 변경하기
  const onAddHabitButtonClick = () => {
    addHabit({
      name: 'test',
      description: 'test',
      days: ['월', '화', '수', '목', '금', '토', '일'],
    });
  };

  return (
    <button onClick={onAddHabitButtonClick} className="add-habit-button">
      <FaPlus />
      습관 추가하기
    </button>
  );
};

export default AddHabitButton;
