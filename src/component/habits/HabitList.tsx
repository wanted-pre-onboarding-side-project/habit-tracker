import { Fragment } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useHabitsData } from '../../context/HabitContextProvider';
import { useUpdatingHabitId } from '../../context/HabitContextProvider';
import HabitNameCard from './list_parts/HabitNameCard';
import HabitDetail from './list_parts/HabitDetail';
import HabitController from './list_parts/HabitController';

const HabitList = () => {
  const habits = useHabitsData();
  const updatingId = useUpdatingHabitId();

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
            <HabitController
              isUpdating={habit.id === updatingId}
              id={habit.id}
            />
          </GridItem>
          <GridItem h="100%" border="2px" padding="2">
            <HabitNameCard
              isUpdating={habit.id === updatingId}
              id={habit.id}
              name={habit.name}
            />
          </GridItem>
          <GridItem h="100%" border="2px" padding="2">
            <HabitDetail
              isUpdating={habit.id === updatingId}
              id={habit.id}
              days={habit.days}
              description={habit.description}
            />
          </GridItem>
        </Fragment>
      ))}
    </Grid>
  );
};

export default HabitList;
