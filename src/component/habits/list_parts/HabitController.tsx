import { HStack, Button } from '@chakra-ui/react';
import { Habit } from '../../../interface/main';

const HabitController = ({
  habitId,
  deleteHabit,
}: {
  habitId: Habit['id'];
  deleteHabit: (id: Habit['id']) => void;
}) => {
  // 임시로 더미 컴포넌트 생성
  return (
    <HStack justify="space-around">
      <Button bg="blue.100">자세히</Button>
      <Button bg="green.100">수정</Button>
      <Button bg="tomato" onClick={() => deleteHabit(habitId)}>
        삭제
      </Button>
    </HStack>
  );
};

export default HabitController;
