import type { WeekRecord, Day } from 'interface/main';
import type { recordActionType } from 'interface/reducer';

export const recordReducer = (
  state: WeekRecord[],
  action: recordActionType,
) => {
  switch (action.type) {
    case 'SET_FROM_LOCALSTORAGE': {
      const { key } = action.value;
      const getLocalStorage = localStorage.getItem(key);

      if (getLocalStorage === null) return [];
      else return JSON.parse(getLocalStorage);
    }

    case 'SYNC_WITH_HABITS': {
      const { habits, periodStart } = action.value;

      const existingRecordIDs = state.map((record) => record.habitId);
      const isCreatedBefore = (createdAt: number) => createdAt <= periodStart;

      const toBeSynced = habits.reduce((prev: WeekRecord[], habit) => {
        if (!existingRecordIDs.includes(habit.id)) {
          if (isCreatedBefore(habit.createdAt)) {
            const checkedDays: WeekRecord['checkedDays'] = {};
            for (const day of habit.days) checkedDays[day] = false;
            prev.push({ habitId: habit.id, checkedDays });
          }
        }
        return prev;
      }, []);

      return [...state, ...toBeSynced];
    }

    case 'MODIFY': {
      return state.map((record) => {
        if (record.habitId !== action.value.habitId) return record;
        else {
          const prevCheckedDays = structuredClone(
            record.checkedDays,
          ) as WeekRecord['checkedDays'];
          const prevDays = Object.keys(prevCheckedDays) as Day[];
          const newDays = action.value.updatedDays;
          const remove = prevDays.filter((day) => !newDays.includes(day));
          const add = newDays.filter((day) => !prevDays.includes(day));

          remove.forEach((ele) => delete prevCheckedDays[ele]); // modifiNG prev
          add.forEach((ele) => (prevCheckedDays[ele] = false)); // modifiNG prev

          return { ...record, checkedDays: prevCheckedDays }; // modifiED prev
        }
      });
    }

    case 'CHECK':
      return state.map((record) => {
        if (record.habitId !== action.value.habitId) return record;
        else {
          const updatedCheckedDays = structuredClone(
            record.checkedDays,
          ) as WeekRecord['checkedDays'];
          updatedCheckedDays[action.value.day] = true;
          return { ...record, checkedDays: updatedCheckedDays };
        }
      });

    case 'UN_CHECK':
      return state.map((record) => {
        if (record.habitId !== action.value.habitId) return record;
        else {
          const updatedCheckedDays = structuredClone(
            record.checkedDays,
          ) as WeekRecord['checkedDays'];
          updatedCheckedDays[action.value.day] = false;
          return { ...record, checkedDays: updatedCheckedDays };
        }
      });

    case 'DELETE':
      return state.filter((record) => record.habitId !== action.value.habitId);

    default:
      throw Error('정의 되지 않은 action type입니다.');
  }
};
