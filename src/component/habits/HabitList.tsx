import { Fragment } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Habit } from '../../interface/main';
import HabitNameCard from './list_parts/HabitNameCard';
import HabitDetail from './list_parts/HabitDetail';
import HabitController from './list_parts/HabitController';

const HabitList = ({
  habits,
  deleteHabit,
}: {
  habits: Habit[];
  deleteHabit: (id: Habit['id']) => void;
}) => {
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
            <HabitController habitId={habit.id} deleteHabit={deleteHabit} />
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
