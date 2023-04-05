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
import { useState, useCallback, useEffect } from 'react';
import { useHabitsHandlers } from '../../context/HabitContextProvider';
import { useUpdatingHabitId } from '../../context/HabitContextProvider';
import { useUpdatingHabitIdChange } from '../../context/HabitContextProvider';
import { DAYS } from '../../constant';

const HabitCreator = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const updatingId = useUpdatingHabitId();
  const setUpdatingId = useUpdatingHabitIdChange();

  const { handleHabitInput, clearHabitInput, handleHabitCreateComplete } =
    useHabitsHandlers();

  const onClickAddMore = () => {
    setIsActive(!isActive);
    setUpdatingId(-1);
  };

  const onClickCancel = useCallback(() => {
    if (window.confirm('정말로 취소하시겠습니까?')) {
      clearHabitInput();
      setIsActive(!isActive);
    }
  }, [clearHabitInput, isActive]);

  const onClickComplete = () => {
    const isSuccess = handleHabitCreateComplete();
    if (isSuccess) setIsActive(!isActive);
  };
  useEffect(() => {
    if (updatingId !== -1 && isActive)
      if (
        window.confirm('작성 중인 내용이 사라집니다. 정말로 취소하시겠습니까?')
      )
        setIsActive(false);
  }, [updatingId, isActive]);

  if (!isActive) return <Button onClick={onClickAddMore}>add more +</Button>;

  return (
    <Grid
      w="100%"
      templateColumns="2.5fr 3fr 10fr"
      gap={3}
      alignContent="center"
    >
      <GridItem h="100%" p="2">
        <Button w="30%" bg="tomato" mr="10%" onClick={onClickCancel}>
          취소
        </Button>
        <Button w="60%" bg="blue.300" onClick={onClickComplete}>
          완료
        </Button>
      </GridItem>
      <GridItem h="100%" padding="2">
        <Input
          placeholder="습관 명칭을 입력하세요."
          variant="flushed"
          borderColor="blue"
          onChange={(e) =>
            handleHabitInput({
              payload: e.currentTarget.value,
              actionType: 'NAME',
            })
          }
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
                    handleHabitInput({
                      payload: { isChecked: e.target.checked, day: day },
                      actionType: 'DAYS',
                    })
                  }
                ></Checkbox>
              </VStack>
            ))}
          </HStack>
          <Textarea
            onChange={(e) => {
              handleHabitInput({
                payload: e.currentTarget.value,
                actionType: 'DESCRIPTION',
              });
            }}
          />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default HabitCreator;
