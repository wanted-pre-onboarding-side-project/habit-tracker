import { useDisclosure, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useHabitContext } from '../hooks/useHabitContext';
import { Habit } from '../service/HabitManager';
import HabitDetailForm, {
  HabitFormProps,
  HabitDetailFormContainer,
} from './HabitDetailForm';

const HabitRow = ({ habit }: { habit: Habit }) => {
  const { year, month, lastDay, updateHabitDetail, deleteHabit } =
    useHabitContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submitHandler: HabitFormProps['submitHandler'] = (habitDetail) => {
    updateHabitDetail({
      ...habitDetail,
      year,
      month,
      id: habit.id,
    });
    onClose();
  };

  const deleteHandler = () => {
    deleteHabit(habit.id);
    onClose();
  };

  return (
    <React.Fragment key={habit.id}>
      <GridItem
        overflow="hidden"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        onClick={onOpen}
        cursor="pointer"
      >
        {habit.name}
      </GridItem>
      {/* TODO : 체크박스 등으로 수정 필요 */}
      <GridItem colSpan={lastDay}>checks</GridItem>

      <HabitDetailFormContainer onClose={onClose} isOpen={isOpen}>
        <HabitDetailForm
          habitFormTitle="습관 수정하기"
          defaultHabitName={habit.name}
          defaultHabitDescription={habit.description}
          submitHandler={submitHandler}
          deleteHandler={deleteHandler}
        />
      </HabitDetailFormContainer>
    </React.Fragment>
  );
};

export default HabitRow;
