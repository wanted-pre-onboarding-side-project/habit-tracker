import { GridItem, useDisclosure } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import { useHabitActionContext } from '../hooks/useHabitContext';
import { usePeriodContext } from '../hooks/usePeriodContext';
import { Habit } from '../service/HabitManager';
import HabitDetailForm, {
  HabitDetailFormContainer,
  HabitFormProps,
} from './HabitDetailForm';

const useHabitRow = (habitId: Habit['id']) => {
  const { year, month, lastDay } = usePeriodContext();
  const { updateHabitDetail, deleteHabit } = useHabitActionContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submitHandler: HabitFormProps['submitHandler'] = useCallback(
    (habitDetail) => {
      updateHabitDetail({
        ...habitDetail,
        year,
        month,
        id: habitId,
      });
      onClose();
    },
    [habitId, month, onClose, updateHabitDetail, year],
  );

  const deleteHandler = useCallback(() => {
    deleteHabit(habitId);
    onClose();
  }, [deleteHabit, habitId, onClose]);

  return {
    lastDay,
    isOpen,
    onOpen,
    onClose,
    submitHandler,
    deleteHandler,
  };
};

const HabitRow = ({ habit }: { habit: Habit }) => {
  const { lastDay, isOpen, onOpen, onClose, submitHandler, deleteHandler } =
    useHabitRow(habit.id);

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

export default React.memo(HabitRow);
