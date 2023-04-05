import { HStack, Button } from '@chakra-ui/react';
import { HabitControllerProps } from '../../../interface/componentProps';
import { useHabitsHandlers } from '../../../context/HabitContextProvider';
import { useUpdatingHabitIdChange } from '../../../context/HabitContextProvider';

const HabitController = ({ isUpdating, id }: HabitControllerProps) => {
  const { handleHabitCreateComplete, handleDeleteHabit } = useHabitsHandlers();
  const setUpdatingId = useUpdatingHabitIdChange();

  if (isUpdating)
    return (
      <HStack justify="space-around">
        <Button bg="tomato" w="30%" onClick={() => setUpdatingId(-1)}>
          취소
        </Button>
        <Button
          bg="green.100"
          w="50%"
          onClick={() => {
            handleHabitCreateComplete(id);
            setUpdatingId(-1);
          }}
        >
          확인
        </Button>
      </HStack>
    );

  return (
    <HStack justify="space-around">
      <Button bg="blue.100">자세히</Button>
      <Button bg="green.100" onClick={() => setUpdatingId(id)}>
        수정
      </Button>
      <Button bg="tomato" onClick={() => handleDeleteHabit(id)}>
        삭제
      </Button>
    </HStack>
  );
};

export default HabitController;
