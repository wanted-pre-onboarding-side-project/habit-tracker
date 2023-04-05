import {
  Flex,
  HStack,
  VStack,
  Checkbox,
  Tag,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { Habit, Day } from '../../../interface/main';
import { DAYS } from '../../../constant';

const HabitDetail = ({
  isUpdating,
  days,
  description,
  changeDesc,
  changeDay,
}: {
  isUpdating: boolean;
  days: Habit['days'];
  description: Habit['description'];
  changeDesc: (desc: Habit['description']) => void;
  changeDay: (isChecked: boolean, day: Day) => void;
}) => {
  return (
    <Flex direction="row" gap="8" px="5">
      <HStack>
        {!isUpdating ? (
          days.map((day) => (
            <Tag key={day} size="lg" bg="salmon">
              {day}
            </Tag>
          ))
        ) : (
          <DaysSelectForm onChangeDay={changeDay} currentDays={days} />
        )}
      </HStack>

      {!isUpdating ? (
        <Text>{description}</Text>
      ) : (
        <Textarea
          variant="filled"
          bg="green.100"
          defaultValue={description}
          onChange={(e) => changeDesc(e.currentTarget.value)}
        />
      )}
    </Flex>
  );
};

export default HabitDetail;

const DaysSelectForm = ({
  onChangeDay,
  currentDays,
}: {
  onChangeDay: (isChecked: boolean, day: Day) => void;
  currentDays: Habit['days'];
}) => {
  return (
    <>
      {DAYS.map((day) => (
        <VStack key={day}>
          <Tag size="lg" bg="salmon">
            {day}
          </Tag>
          <Checkbox
            borderColor="salmon"
            size="lg"
            defaultChecked={
              currentDays.findIndex((D) => D === day) < 0 ? false : true
            }
            onChange={(e) => onChangeDay(e.target.checked, day as Day)}
          ></Checkbox>
        </VStack>
      ))}
    </>
  );
};
