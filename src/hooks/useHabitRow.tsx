import { useDisclosure } from '@chakra-ui/react';
import { useCallback } from 'react';
import { HabitFormProps } from '../components/HabitDetailForm';
import { Habit } from '../service/HabitManager';
import { useHabitActionContext } from './context/useHabitContext';
import { usePeriodContext } from './context/usePeriodContext';

export const useHabitRow = (habitId: Habit['id']) => {
  const { year, month, lastDay } = usePeriodContext();
  const { updateHabitDetail, deleteHabit } = useHabitActionContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const updateHabitRow: HabitFormProps['submitHandler'] = useCallback(
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

  const deleteHabitRow = useCallback(() => {
    deleteHabit(habitId);
    onClose();
  }, [deleteHabit, habitId, onClose]);

  return {
    lastDay,
    isOpen,
    onOpen,
    onClose,
    updateHabitRow,
    deleteHabitRow,
  };
};
