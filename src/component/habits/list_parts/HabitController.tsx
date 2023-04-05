import { HStack, Button } from '@chakra-ui/react';
import { Habit } from '../../../interface/main';
import { useHabitsHandlers } from '../../../context/HabitContextProvider';

const HabitController = ({
  habitId,
  setUpdatingId,
  handleUpdateSubmit,
}: {
  habitId: Habit['id'];
  setUpdatingId: (updatingId: Habit['id']) => void;
  handleUpdateSubmit: () => void;
}) => {
  const { handleDeleteHabit } = useHabitsHandlers();
  return (
    <HStack justify="space-around">
      <Button bg="blue.100" onClick={handleUpdateSubmit}>
        자세히
      </Button>
      <Button bg="green.100" onClick={() => setUpdatingId(habitId)}>
        수정
      </Button>
      <Button bg="tomato" onClick={() => handleDeleteHabit(habitId)}>
        삭제
      </Button>
    </HStack>
  );
};

export default HabitController;
