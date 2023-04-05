import { Center, Text, Input } from '@chakra-ui/react';
import { Habit } from '../../../interface/main';
import { useHabitsHandlers } from '../../../context/HabitContextProvider';

const HabitNameCard = ({
  isUpdating,
  id,
  name,
}: {
  isUpdating: boolean;
  id: Habit['id'];
  name: Habit['name'];
}) => {
  const { handleHabitInput } = useHabitsHandlers();

  return (
    <Center>
      {!isUpdating ? (
        <Text>{name}</Text>
      ) : (
        <Input
          variant="filled"
          bg="green.100"
          defaultValue={name}
          onChange={(e) =>
            handleHabitInput({
              id: id,
              payload: e.target.value,
              actionType: 'NAME',
            })
          }
        />
      )}
    </Center>
  );
};

export default HabitNameCard;
