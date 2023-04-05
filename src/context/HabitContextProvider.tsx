import {
  createContext,
  useCallback,
  useContext,
  useState,
  useRef,
} from 'react';
import { Habit, HabitsHandlersContextType } from '../interface/main';
import { isNameEmpty } from '../util/validator';
import { HandleHabitInputProps } from '../interface/props';

const HabitsContext = createContext<Habit[]>([]);
const HabitsHandlersContext = createContext({});

export const useHabitsData = () => useContext(HabitsContext);
export const useHabitsHandlers = () =>
  useContext(HabitsHandlersContext) as HabitsHandlersContextType;

const habitSkeleton = {
  id: -1,
  name: '',
  description: '',
  days: [],
} as const;

const HabitContextProvider = ({ children }: { children: JSX.Element }) => {
  console.log('Provider rendered');

  const [habits, setHabits] = useState<Habit[]>([]);

  const updatingHabit = useRef<Habit>(structuredClone(habitSkeleton));

  const handleHabitInput = useCallback(
    ({ id, payload, actionType }: HandleHabitInputProps) => {
      updatingHabit.current.id = !id
        ? habits.length === 0
          ? 0
          : habits[habits.length - 1].id + 1
        : id;
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

  const handleHabitInputComplete = useCallback((): boolean => {
    const { name, days } = updatingHabit.current;
    if (isNameEmpty(name)) {
      window.alert('이름은 필수 입력입니다.');
      return false;
    }
    if (!days.length) {
      window.alert('적어도 한 개 요일을 선택해야 합니다.');
      return false;
    }
    setHabits([...habits, structuredClone(updatingHabit.current)]);
    clearHabitInput();
    return true;
  }, [habits, updatingHabit, clearHabitInput]);

  const handleDeleteHabit = useCallback(
    (id: Habit['id']) => setHabits(habits.filter((habit) => habit.id !== id)),
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
          handleHabitInputComplete,
          handleDeleteHabit,
        }}
      >
        {children}
      </HabitsHandlersContext.Provider>
    </HabitsContext.Provider>
  );
};

export default HabitContextProvider;
