import {
  Flex,
  HStack,
  VStack,
  Checkbox,
  Tag,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { Habit } from '../../../interface/main';
import { DAYS } from '../../../constant';
import { useHabitsHandlers } from '../../../context/HabitContextProvider';

const HabitDetail = ({
  isUpdating,
  id,
  days,
  description,
}: {
  isUpdating: boolean;
  id: Habit['id'];
  days: Habit['days'];
  description: Habit['description'];
}) => {
  const { handleHabitInput } = useHabitsHandlers();

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
          <DaysSelectForm id={id} currentDays={days} />
        )}
      </HStack>

      {!isUpdating ? (
        <Text>{description}</Text>
      ) : (
        <Textarea
          variant="filled"
          bg="green.100"
          defaultValue={description}
          onChange={(e) =>
            handleHabitInput({
              id: id,
              payload: e.target.value,
              actionType: 'DESCRIPTION',
            })
          }
        />
      )}
    </Flex>
  );
};

export default HabitDetail;

const DaysSelectForm = ({
  id,
  currentDays,
}: {
  id: Habit['id'];
  currentDays: Habit['days'];
}) => {
  const { handleHabitInput } = useHabitsHandlers();

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
            onChange={(e) =>
              handleHabitInput({
                id: id,
                payload: { isChecked: e.target.checked, day: day },
                actionType: 'DAYS',
              })
            }
          ></Checkbox>
        </VStack>
      ))}
    </>
  );
};
