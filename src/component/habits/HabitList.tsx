import { Grid, GridItem, HStack, Button } from '@chakra-ui/react';
import { useHabitData } from '../../hooks/useHabitData';
import HabitNameCard from './HabitNameCard';
import HabitDetail from './HabitDetail';

const HabitList = () => {
  const { habits } = useHabitData();

  return (
    <Grid w="100%" templateColumns="2fr 3fr 10fr" gap={5} alignContent="center">
      {habits.map((habit) => (
        <>
          <GridItem h="100%" border="2px" padding="2">
            <HabitController />
          </GridItem>
          <GridItem h="100%" border="2px" padding="2">
            <HabitNameCard name={habit.name} />
          </GridItem>
          <GridItem h="100%" border="2px" padding="2">
            <HabitDetail days={habit.days} description={habit.description} />
          </GridItem>
        </>
      ))}
    </Grid>
  );
};

export default HabitList;

const HabitController = () => {
  // 임시로 더미 컴포넌트 생성
  return (
    <HStack justify="space-around">
      <Button bg="tomato">detail</Button>
      <Button bg="tomato">update</Button>
      <Button bg="tomato">delete</Button>
    </HStack>
  );
};
