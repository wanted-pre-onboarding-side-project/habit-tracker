import { HStack, Button } from '@chakra-ui/react';
import { HabitControllerProps } from '../../../interface/componentProps';
import { useHabitsHandlers } from '../../../context/HabitContextProvider';
import { useUpdatingHabitIdChange } from '../../../context/HabitContextProvider';
import { useUpdatingHabitId } from '../../../context/HabitContextProvider';

const HabitController = ({ isUpdating, id }: HabitControllerProps) => {
  const { handleHabitSubmit, handleDeleteHabit } = useHabitsHandlers();
  const setUpdatingId = useUpdatingHabitIdChange();
  const updatingId = useUpdatingHabitId();

  const onClickUpdate = () => {
    if (updatingId === -2)
      window.alert('작성 중이던 것을 완료/취소 해 주세요. ');
    else setUpdatingId(id);
  };

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
            handleHabitSubmit(id);
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
      <Button bg="green.100" onClick={onClickUpdate}>
        수정
      </Button>
      <Button bg="tomato" onClick={() => handleDeleteHabit(id)}>
        삭제
      </Button>
    </HStack>
  );
};

export default HabitController;
