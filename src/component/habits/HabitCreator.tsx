import {
  Grid,
  GridItem,
  Checkbox,
  Button,
  Input,
  Flex,
  Tag,
  HStack,
  VStack,
  Textarea,
} from '@chakra-ui/react';
import { useState, useRef } from 'react';
import { Day } from '../../interface/main';
import { NewHabit } from '../../interface/props';

const HabitCreator = ({
  createHabit,
}: {
  createHabit: (habit: NewHabit) => void;
}) => {
  const defaultNewHbit = {
    name: '',
    description: '',
    days: [],
  };
  const [isActive, setIsActive] = useState<boolean>(false);
  const newHabit = useRef<NewHabit>(defaultNewHbit);

  const DAYS = ['월', '화', '수', '목', '금', '토', '일'];

  const handleInput = (
    fieldName: keyof Pick<NewHabit, 'name' | 'description'>,
    value: NewHabit[keyof Pick<NewHabit, 'name' | 'description'>],
  ) => {
    newHabit.current[fieldName] = value;
  };

  const handleDaysInput = (day: Day, isChecked: boolean) => {
    const currentDays = [...newHabit.current.days];
    if (isChecked) newHabit.current.days = [...currentDays, day];
    else {
      newHabit.current.days = currentDays.filter((e) => e !== day);
    }
  };

  const handleOnCreate = () => {
    const { name, days } = newHabit.current;

    if (name.trim() === '') {
      window.alert('이름은 필수 입력입니다.');
      return;
    }
    if (!days.length) {
      window.alert('적어도 한 개 요일을 선택해야 합니다.');
      return;
    }
    createHabit(structuredClone(newHabit.current));
    newHabit.current = defaultNewHbit;
    setIsActive(!isActive);
  };

  return (
    <>
      {!isActive ? (
        <Button onClick={() => setIsActive(!isActive)}>add more +</Button>
      ) : (
        <Grid
          w="100%"
          templateColumns="2.5fr 3fr 10fr"
          gap={3}
          alignContent="center"
        >
          <GridItem h="100%" p="2">
            <Button
              w="30%"
              bg="tomato"
              mr="10%"
              onClick={() => {
                if (window.confirm('정말로 취소하시겠습니까?'))
                  setIsActive(!isActive);
              }}
            >
              취소
            </Button>
            <Button w="60%" bg="blue.300" onClick={handleOnCreate}>
              완료
            </Button>
          </GridItem>
          <GridItem h="100%" padding="2">
            <Input
              placeholder="습관 명칭을 입력하세요."
              variant="flushed"
              borderColor="blue"
              onChange={(e) => handleInput('name', e.currentTarget.value)}
            ></Input>
          </GridItem>
          <GridItem h="100%" border="2px" padding="2">
            <Flex direction="row" gap="8" px="5">
              <HStack>
                {DAYS.map((day) => (
                  <VStack key={day}>
                    <Tag size="lg" bg="salmon">
                      {day}
                    </Tag>
                    <Checkbox
                      borderColor="salmon"
                      size="lg"
                      onChange={(e) =>
                        handleDaysInput(day as Day, e.target.checked)
                      }
                    ></Checkbox>
                  </VStack>
                ))}
              </HStack>
              <Textarea
                onChange={(e) =>
                  handleInput('description', e.currentTarget.value)
                }
              />
            </Flex>
          </GridItem>
        </Grid>
      )}
    </>
  );
};

export default HabitCreator;
