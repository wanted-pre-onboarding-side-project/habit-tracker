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
import { useCallback } from 'react';
import {
  useHabitActionContext,
  useHabitValueContext,
} from '../hooks/useHabitContext';
import { usePeriodContext } from '../hooks/usePeriodContext';
import HabitDetailForm, {
  HabitDetailFormContainer,
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
  const { year, month } = usePeriodContext();
  return (
    <Text>
      {year}년 {month}월
    </Text>
  );
};

const Habits = () => {
  const { lastDay } = usePeriodContext();

  return (
    <Grid
      templateColumns={`150px repeat(${lastDay}, 1fr)`}
      textAlign="center"
      gap={2}
    >
      <HabitsHeader lastDay={lastDay} />
      <HabitRows />
    </Grid>
  );
};

const HabitRows = () => {
  const { habits } = useHabitValueContext();
  return (
    <>
      {habits.map((habit) => (
        <HabitRow habit={habit} key={habit.id} />
      ))}
    </>
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

const useHabitAdd = () => {
  const { year, month } = usePeriodContext();
  const { createHabit } = useHabitActionContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submitHandler: HabitFormProps['submitHandler'] = useCallback(
    (habitDetail) => {
      createHabit({ ...habitDetail, year, month });
      onClose();
    },
    [createHabit, month, onClose, year],
  );

  return { submitHandler, onOpen, onClose, isOpen };
};

const HabitAdd = () => {
  const { submitHandler, onOpen, onClose, isOpen } = useHabitAdd();

  return (
    <>
      <IconButton aria-label="add habit" icon={<AddIcon />} onClick={onOpen} />

      <HabitDetailFormContainer onClose={onClose} isOpen={isOpen}>
        <HabitDetailForm
          habitFormTitle="습관 생성하기"
          submitHandler={submitHandler}
        />
      </HabitDetailFormContainer>
    </>
  );
};
