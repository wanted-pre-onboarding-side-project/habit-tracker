import { Flex, VStack } from '@chakra-ui/react';
import AppHeader from './component/AppHeader';
import HabitList from './component/habits/HabitList';
import HabitCreator from './component/habits/HabitCreator';

const App = () => {
  return (
    <Flex direction="column" m="10">
      <AppHeader />
      <VStack mt="10">
        <HabitList />
        <HabitCreator />
      </VStack>
    </Flex>
  );
};

export default App;
