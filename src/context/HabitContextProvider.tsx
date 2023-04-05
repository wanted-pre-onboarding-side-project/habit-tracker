import {
  createContext,
  useCallback,
  useContext,
  useState,
  useRef,
} from 'react';
import { Habit } from '../interface/habit';
import { HabitsHandlersContextType } from '../interface/context';
import { HandleHabitInputProps } from '../interface/eventHandlers';
import { isNameEmpty } from '../util/validator';

const HabitsContext = createContext<Habit[]>([]);
const HabitsHandlersContext = createContext({});
const UpdatingIdContext = createContext<Habit['id'] | null>(null);
const UpdatingIdChangeContext = createContext({});

export const useHabitsData = () => useContext(HabitsContext);
export const useHabitsHandlers = () =>
  useContext(HabitsHandlersContext) as HabitsHandlersContextType;
export const useUpdatingHabitId = () => useContext(UpdatingIdContext);
export const useUpdatingHabitIdChange = () =>
  useContext(UpdatingIdChangeContext) as (updatingId: Habit['id']) => void;

const habitSkeleton = {
  id: -1,
  name: '',
  description: '',
  days: [],
} as const;

const HabitContextProvider = ({ children }: { children: JSX.Element }) => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [updatingHabitId, setUpdatingHabitId] = useState<Habit['id'] | null>(
    null,
  );

  const updatingHabit = useRef<Habit>(structuredClone(habitSkeleton));

  const handleHabitInput = useCallback(
    ({ id, payload, actionType }: HandleHabitInputProps) => {
      if (typeof id === 'undefined') {
        updatingHabit.current.id = habits.length;
      } else updatingHabit.current.id = id;
      switch (actionType) {
        case 'NAME':
          updatingHabit.current.name = payload as string;
          break;
        case 'DESCRIPTION':
          updatingHabit.current.description = payload as string;
          break;
        case 'DAYS': {
          if (typeof payload !== 'string') {
            const { isChecked, day } = payload;
            const currentDays = [...updatingHabit.current.days];
            if (isChecked) updatingHabit.current.days = [...currentDays, day];
            else
              updatingHabit.current.days = currentDays.filter((e) => e !== day);
          }
          break;
        }
        default:
          throw Error('정의되지 않은 actionType입니다.: ', actionType);
      }
    },
    [habits],
  );

  const clearHabitInput = useCallback(() => {
    updatingHabit.current = structuredClone(habitSkeleton);
  }, []);

  const handleHabitSubmit = useCallback(
    (updatingId: Habit['id']): boolean => {
      if (isNameEmpty(updatingHabit.current.name)) {
        window.alert('이름은 필수 입력입니다.');
        return false;
      }
      if (!updatingHabit.current.days.length) {
        window.alert('적어도 한 개 요일을 선택해야 합니다.');
        return false;
      }

      if (typeof updatingId === 'undefined') {
        // 아이디 제공 X => CREATE
        setHabits([...habits, structuredClone(updatingHabit.current)]);
      } else {
        //  아이디 제공 O => UPDATE
        setHabits(
          habits.map((habit) =>
            habit.id === updatingId
              ? structuredClone(updatingHabit.current)
              : habit,
          ),
        );
      }
      clearHabitInput();
      return true;
    },
    [habits, updatingHabit, clearHabitInput],
  );

  const handleDeleteHabit = useCallback(
    (id: Habit['id']) => setHabits(habits.filter((habit) => habit.id !== id)),
    [habits],
  );

  const handleUpdatingHabitId = useCallback(
    (updatingId: Habit['id']) => {
      setUpdatingHabitId(updatingId);
      if (updatingId === -1 || updatingId === -2)
        updatingHabit.current = structuredClone(habitSkeleton);
      else updatingHabit.current = structuredClone(habits[updatingId]);
    },
    [habits],
  );

  //  TODO
  //  <HabitsHandlersContext.Provider> 이놈의 value는 객체다. 그러니까 memoization 해야한다.
  return (
    <HabitsContext.Provider value={habits}>
      <HabitsHandlersContext.Provider
        value={{
          handleHabitInput,
          clearHabitInput,
          handleHabitSubmit,
          handleDeleteHabit,
        }}
      >
        <UpdatingIdContext.Provider value={updatingHabitId}>
          <UpdatingIdChangeContext.Provider value={handleUpdatingHabitId}>
            {children}
          </UpdatingIdChangeContext.Provider>
        </UpdatingIdContext.Provider>
      </HabitsHandlersContext.Provider>
    </HabitsContext.Provider>
  );
};

export default HabitContextProvider;
