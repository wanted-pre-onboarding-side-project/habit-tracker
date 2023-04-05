import { Center, Text, Input } from '@chakra-ui/react';
import { Habit } from '../../../interface/main';

const HabitNameCard = ({
  isUpdating,
  name,
  changeName,
}: {
  isUpdating: boolean;
  name: Habit['name'];
  changeName: (newName: Habit['name']) => void;
}) => {
  return (
    <Center>
      {!isUpdating ? (
        <Text>{name}</Text>
      ) : (
        <Input
          variant="filled"
          bg="green.100"
          defaultValue={name}
          onChange={(e) => changeName(e.currentTarget.value)}
        />
      )}
    </Center>
  );
};

export default HabitNameCard;
