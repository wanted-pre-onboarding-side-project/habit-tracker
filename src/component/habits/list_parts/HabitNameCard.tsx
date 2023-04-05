import { Center, Text, Input } from '@chakra-ui/react';
import { HabitNameCardProps } from '../../../interface/componentProps';
import { useHabitsHandlers } from '../../../context/HabitContextProvider';

const HabitNameCard = ({ isUpdating, id, name }: HabitNameCardProps) => {
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
