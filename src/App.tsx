import { Flex, VStack } from '@chakra-ui/react';
import AppHeader from './component/AppHeader';
import HabitList from './component/habits/HabitList';
import HabitCreator from './component/habits/HabitCreator';
import { useHabitData } from './hooks/useHabitData';

const App = () => {
  const { habits, addHabit } = useHabitData();

  return (
    <Flex direction="column" m="10">
      <AppHeader />
      <VStack mt="10">
        <HabitList habits={habits} />
        <HabitCreator addHabit={addHabit} />
      </VStack>
    </Flex>
  );
};

export default App;
