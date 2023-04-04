import { Center } from '@chakra-ui/react';
import { Habit } from '../../../interface/main';

const HabitNameCard = ({ name }: Pick<Habit, 'name'>) => {
  return <Center>{name}</Center>;
};

export default HabitNameCard;
