import { Grid, GridItem, HStack, Button } from '@chakra-ui/react';
import HabitNameCard from './HabitNameCard';

const HabitList = () => {
  return (
    <Grid w="100%" templateColumns="2fr 3fr 10fr" gap={5} alignContent="center">
      <GridItem h="100%" border="2px" padding="2">
        <HabitController />
      </GridItem>
      <GridItem h="100%" border="2px" padding="2">
        <HabitNameCard />
      </GridItem>
      <GridItem h="100%" border="2px" padding="2">
        <HabitDetail />
      </GridItem>
    </Grid>
  );
};

export default HabitList;

const HabitController = () => {
  // 임시로 더미 컴포넌트 생성
  return (
    <HStack justify="space-around">
      <Button bg="tomato">detail</Button>
      <Button bg="tomato">update</Button>
      <Button bg="tomato">delete</Button>
    </HStack>
  );
};
const HabitDetail = () => {
  // 임시로 더미 컴포넌트 생성
  return (
    <HStack>
      <span>days</span>;<span>detail</span>;
    </HStack>
  );
};
