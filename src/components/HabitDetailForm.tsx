import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import { HabitCreateContent } from '../service/HabitManager';

const HABIT_DETAIL_FORM_ID = 'habit-detail-form';

const HabitDetailForm = ({
  submitHandler,
  habitName,
  habitDescription,
  deleteHandler,
}: HabitFormProps) => {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('habitName');
    const description = formData.get('habitDescription');

    // 데이터가 파일인 경우 제외함 (formDataEntryValue = string | File)
    // 좋은 방법이 떠오르지 않음..
    if (!name || typeof name !== 'string' || typeof description !== 'string')
      return;

    submitHandler({ name, description });

    e.currentTarget.reset();
  };
  return (
    <Stack spacing={4}>
      <form onSubmit={onSubmit} id={HABIT_DETAIL_FORM_ID}>
        <FormControl isRequired>
          <FormLabel>습관</FormLabel>
          <Input
            name="habitName"
            required
            placeholder="만들고 싶은 습관을 입력해주세요"
            defaultValue={habitName}
          />
        </FormControl>

        <FormControl>
          <FormLabel>설명</FormLabel>
          <Input
            name="habitDescription"
            placeholder="메모를 남겨보세요"
            defaultValue={habitDescription}
          />
        </FormControl>
      </form>
      <Stack direction="row" justifyContent="space-between">
        <Button type="submit" form={HABIT_DETAIL_FORM_ID} colorScheme="blue">
          저장
        </Button>
        {deleteHandler && <Button colorScheme="red">삭제</Button>}
      </Stack>
    </Stack>
  );
};

export interface HabitFormProps {
  habitName?: string;
  habitDescription?: string;
  submitHandler({
    name,
    description,
    dates,
  }: Pick<HabitCreateContent, 'name' | 'description' | 'dates'>): void;
  deleteHandler?: () => void;
}

export default HabitDetailForm;

export const HabitDrawer = ({
  onClose,
  isOpen,
  title,
  children,
}: HabitDrawerProps) => {
  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">{title}</DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

interface HabitDrawerProps extends DrawerProps {
  title: string;
}
