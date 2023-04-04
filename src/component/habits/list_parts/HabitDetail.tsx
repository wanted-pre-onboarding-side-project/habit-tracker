import { Flex, HStack, Tag, Text } from '@chakra-ui/react';
import { Habit } from '../../../interface/main';

const HabitDetail = ({
  days,
  description,
}: Pick<Habit, 'days' | 'description'>) => {
  return (
    <Flex direction="row" gap="8" px="5">
      <HStack>
        {days.map((day) => (
          <Tag key={day} size="lg" bg="salmon">
            {day}
          </Tag>
        ))}
      </HStack>
      <Text>{description}</Text>
    </Flex>
  );
};

export default HabitDetail;
