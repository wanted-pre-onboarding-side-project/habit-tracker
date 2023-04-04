import { AddIcon } from '@chakra-ui/icons';
import {
  Container,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useHabitContext } from '../context/HabitContext';
import HabitDetailForm, {
  HabitDrawer,
  HabitFormProps,
} from './HabitDetailForm';
import HabitRow from './HabitRow';

const HabitTracker = () => {
  return (
    <Container maxW="container.xl">
      <Stack py={10} spacing={8}>
        <Heading>Habit tracker</Heading>
        <PeriodSection />
        <Habits />
        <HabitAdd />
      </Stack>
    </Container>
  );
};

export default HabitTracker;

const PeriodSection = () => {
  const { year, month } = useHabitContext();
  return (
    <Text>
      {year}년 {month}월
    </Text>
  );
};

const Habits = () => {
  const { lastDay, habits } = useHabitContext();

  return (
    <Grid
      templateColumns={`150px repeat(${lastDay}, 1fr)`}
      textAlign="center"
      gap={2}
    >
      <HabitsHeader lastDay={lastDay} />

      {habits.map((habit) => (
        <HabitRow habit={habit} key={habit.id} />
      ))}
    </Grid>
  );
};

const HabitsHeader = ({ lastDay }: { lastDay: number }) => {
  return (
    <>
      <GridItem fontWeight="bold">habit</GridItem>

      {Array(lastDay)
        .fill(0)
        .map((v, i) => (
          <GridItem fontWeight="bold" key={i}>
            {i + 1}
          </GridItem>
        ))}
    </>
  );
};

const HabitAdd = () => {
  const { createHabit, year, month } = useHabitContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submitHandler: HabitFormProps['submitHandler'] = (habitDetail) => {
    createHabit({ ...habitDetail, year, month });
    onClose();
  };

  return (
    <>
      <IconButton aria-label="add habit" icon={<AddIcon />} onClick={onOpen} />

      <HabitDrawer onClose={onClose} isOpen={isOpen} title={'습관 생성하기'}>
        <HabitDetailForm submitHandler={submitHandler} />
      </HabitDrawer>
    </>
  );
};
