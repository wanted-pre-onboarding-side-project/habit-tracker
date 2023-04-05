import { HStack, Button } from '@chakra-ui/react';
import { Habit } from '../../../interface/main';
import { useHabitsHandlers } from '../../../context/HabitContextProvider';

const HabitController = ({ habitId }: { habitId: Habit['id'] }) => {
  const { handleDeleteHabit } = useHabitsHandlers();
  return (
    <HStack justify="space-around">
      <Button bg="blue.100">자세히</Button>
      <Button bg="green.100">수정</Button>
      <Button bg="tomato" onClick={() => handleDeleteHabit(habitId)}>
        삭제
      </Button>
    </HStack>
  );
};

export default HabitController;
