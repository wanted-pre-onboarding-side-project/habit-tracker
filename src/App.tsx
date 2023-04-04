import { Flex, VStack } from '@chakra-ui/react';
import AppHeader from './component/AppHeader';
import HabitList from './component/habits/HabitList';
import HabitCreator from './component/habits/HabitCreator';
import { useHabitData } from './hooks/useHabitData';

const App = () => {
  const { habits, createHabit, deleteHabit } = useHabitData();

  return (
    <Flex direction="column" m="10">
      <AppHeader />
      <VStack mt="10">
        <HabitList habits={habits} deleteHabit={deleteHabit} />
        <HabitCreator createHabit={createHabit} />
      </VStack>
    </Flex>
  );
};

export default App;
