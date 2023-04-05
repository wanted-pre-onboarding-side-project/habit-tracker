import {
  Button,
  Checkbox,
  CheckboxGroup,
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
import { Day, HabitCreateContent } from '../service/HabitManager';

const HABIT_DETAIL_FORM_ID = 'habit-detail-form';
const DAYS_IN_WEEK: Day[] = ['월', '화', '수', '목', '금', '토', '일'];

// const validateHabitDetailFormValues = () => {};

const HabitDetailForm = ({
  habitFormTitle,
  submitHandler,
  defaultHabitName,
  defaultHabitDescription,
  defaultRepeatDays,
  deleteHandler,
}: HabitFormProps) => {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('habitName');
    const description = formData.get('habitDescription');
    const dates = formData.getAll('repeatDays') as Day[]; // TODO : 타입단언 말고 다른 방식으로 Day[] 로 타입이 추론되도록 수정하기

    // TODO: 유효성검사, 타입추론 더 나은 방식 생각
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      alert('습관 이름을 입력해주세요');
      return;
    }

    // description타입을 string | null 로 추론하기 위한 코드. description 은 optional값이므로 null 여부는 체크할 필요 없음
    if (description && typeof description !== 'string') {
      return;
    }

    if (!dates || dates.length === 0) {
      alert('실행할 요일을 지정해주세요');
      return;
    }

    submitHandler({
      name,
      description: description ?? undefined,
      dates,
    });

    e.currentTarget.reset();
  };

  return (
    <Stack spacing={4}>
      {habitFormTitle && <Heading fontSize="xl">{habitFormTitle}</Heading>}

      <form onSubmit={onSubmit} id={HABIT_DETAIL_FORM_ID}>
        <Stack spacing={4}>
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

          <FormControl>
            <FormLabel>반복 요일</FormLabel>
            <CheckboxGroup defaultValue={defaultRepeatDays || DAYS_IN_WEEK}>
              <Stack spacing={6} direction="row">
                {DAYS_IN_WEEK.map((day) => (
                  <Checkbox
                    key={day}
                    value={day}
                    name="repeatDays"
                    defaultChecked={defaultRepeatDays?.includes(day)}
                  >
                    {day}
                  </Checkbox>
                ))}
              </Stack>
            </CheckboxGroup>
          </FormControl>
        </Stack>
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
  /** 습관 반복요일 input=checkbox 기본값, 습관수정 시 기존 반복요일을 받아 표시합니다 */
  defaultRepeatDays?: Day[];
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
