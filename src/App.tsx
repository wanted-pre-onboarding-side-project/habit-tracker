import { Flex, VStack } from '@chakra-ui/react';
import AppHeader from './component/AppHeader';
import HabitList from './component/habits/HabitList';

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

const HabitCreator = () => {
  // 임시로 더미 컴포넌트 생성
  return <button>NEW HABIT</button>;
};
