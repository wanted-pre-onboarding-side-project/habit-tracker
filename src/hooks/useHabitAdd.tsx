import { useDisclosure } from '@chakra-ui/react';
import { useCallback } from 'react';
import { HabitFormProps } from '../components/HabitDetailForm';
import { useHabitActionContext } from './context/useHabitContext';
import { usePeriodContext } from './context/usePeriodContext';

export const useHabitAdd = () => {
  const { year, month } = usePeriodContext();
  const { createHabit } = useHabitActionContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submitHandler: HabitFormProps['submitHandler'] = useCallback(
    (habitDetail) => {
      createHabit({ ...habitDetail, year, month });
      onClose();
    },
    [createHabit, month, onClose, year],
  );

  return { submitHandler, onOpen, onClose, isOpen };
};
