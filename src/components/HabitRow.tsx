import { GridItem } from '@chakra-ui/react';
import React from 'react';
import { useHabitRow } from '../hooks/useHabitRow';
import { Habit } from '../service/HabitManager';
import HabitDetailForm, { HabitDetailFormContainer } from './HabitDetailForm';

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
