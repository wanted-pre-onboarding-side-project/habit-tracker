import { Fragment, useState, useRef, useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useHabitsData } from '../../context/HabitContextProvider';
import { useHabitsHandlers } from '../../context/HabitContextProvider';
import { Habit, Day } from '../../interface/main';
import HabitNameCard from './list_parts/HabitNameCard';
import HabitDetail from './list_parts/HabitDetail';
import HabitController from './list_parts/HabitController';

const HabitList = () => {
  const habits = useHabitsData();
  const { handleHabitUpdateComplete } = useHabitsHandlers();
  const [updatingId, setUpdatingId] = useState<Habit['id']>(-1);
  const updatingHabit = useRef<Habit>({
    id: -1,
    name: '',
    description: '',
    days: [],
  });

  useEffect(() => {
    if (updatingId !== -1)
      updatingHabit.current = structuredClone(habits[updatingId]);
    else
      updatingHabit.current = {
        id: -1,
        name: '',
        description: '',
        days: [],
      };
  }, [updatingId, habits]);

  const handleSetUpdatingId = (id: Habit['id']) =>
    setUpdatingId(updatingId === id ? -1 : id);

  const changeName = (name: Habit['name']) =>
    (updatingHabit.current.name = name);

  const changeDesc = (desc: Habit['description']) =>
    (updatingHabit.current.description = desc);

  const changeDay = (isChecked: boolean, day: Day) => {
    console.log(day);
    const currentDays = [...updatingHabit.current.days];
    if (isChecked) updatingHabit.current.days = [...currentDays, day];
    else updatingHabit.current.days = currentDays.filter((d) => d !== day);
  };

  const handleUpdateSubmit = () => {
    const isUpdateSuccess = handleHabitUpdateComplete(
      structuredClone(updatingHabit.current),
    );
    if (isUpdateSuccess) setUpdatingId(-1);
  };

  //const handleSubmitUpdate = () => {};

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
              habitId={habit.id}
              setUpdatingId={handleSetUpdatingId}
              handleUpdateSubmit={handleUpdateSubmit}
            />
          </GridItem>
          <GridItem h="100%" border="2px" padding="2">
            <HabitNameCard
              isUpdating={habit.id === updatingId}
              name={habit.name}
              changeName={changeName}
            />
          </GridItem>
          <GridItem h="100%" border="2px" padding="2">
            <HabitDetail
              isUpdating={habit.id === updatingId}
              days={habit.days}
              description={habit.description}
              changeDesc={changeDesc}
              changeDay={changeDay}
            />
          </GridItem>
        </Fragment>
      ))}
    </Grid>
  );
};

export default HabitList;
