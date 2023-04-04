import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import { HabitCreateContent } from '../service/HabitManager';

const HABIT_DETAIL_FORM_ID = 'habit-detail-form';

const HabitDetailForm = ({
  habitFormTitle,
  submitHandler,
  defaultHabitName,
  defaultHabitDescription,
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
      {habitFormTitle && <Heading fontSize="xl">{habitFormTitle}</Heading>}

      <form onSubmit={onSubmit} id={HABIT_DETAIL_FORM_ID}>
        <FormControl isRequired>
          <FormLabel>습관</FormLabel>
          <Input
            type="text"
            name="habitName"
            required
            placeholder="만들고 싶은 습관을 입력해주세요"
            defaultValue={defaultHabitName}
          />
        </FormControl>

        <FormControl>
          <FormLabel>설명</FormLabel>
          <Input
            type="text"
            name="habitDescription"
            placeholder="메모를 남겨보세요"
            defaultValue={defaultHabitDescription}
          />
        </FormControl>
      </form>
      <Stack direction="row" justifyContent="space-between">
        <Button type="submit" form={HABIT_DETAIL_FORM_ID} colorScheme="blue">
          저장
        </Button>
        {deleteHandler && (
          <Button colorScheme="red" onClick={deleteHandler}>
            삭제
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export interface HabitFormProps {
  /**폼 제목 */
  habitFormTitle?: string;
  /** 습관 이름 input 기본값, 습관수정 시 기존 습관 이름을 받아 표시합니다 */
  defaultHabitName?: string;
  /** 습관 설명 input 기본값, 습관수정 시 기존 습관 설명을 받아 표시합니다 */
  defaultHabitDescription?: string;
  submitHandler({
    name,
    description,
    dates,
  }: Pick<HabitCreateContent, 'name' | 'description' | 'dates'>): void;
  deleteHandler?: () => void;
}

export default HabitDetailForm;

export const HabitDetailFormContainer = ({
  onClose,
  isOpen,
  children,
}: HabitDetailFormContainerProps) => {
  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

interface HabitDetailFormContainerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
