import { Fragment } from 'react';
import { Grid, GridItem, HStack, Button } from '@chakra-ui/react';
import { Habit } from '../../interface/main';
import HabitNameCard from './HabitNameCard';
import HabitDetail from './HabitDetail';

const HabitList = ({ habits }: { habits: Habit[] }) => {
  return (
    <Grid
      w="100%"
      templateColumns="2.5fr 3fr 10fr"
      gap={3}
      alignContent="center"
    >
      {habits.map((habit) => (
        <Fragment key={habit.id}>
          <GridItem h="100%" border="2px" padding="2">
            <HabitController />
          </GridItem>
          <GridItem h="100%" border="2px" padding="2">
            <HabitNameCard name={habit.name} />
          </GridItem>
          <GridItem h="100%" border="2px" padding="2">
            <HabitDetail days={habit.days} description={habit.description} />
          </GridItem>
        </Fragment>
      ))}
    </Grid>
  );
};

export default HabitList;

const HabitController = () => {
  // 임시로 더미 컴포넌트 생성
  return (
    <HStack justify="space-around">
      <Button bg="blue.100">자세히</Button>
      <Button bg="green.100">수정</Button>
      <Button bg="tomato">삭제</Button>
    </HStack>
  );
};
