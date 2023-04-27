import type { WeekRecord, Day } from 'interface/main';
import type { recordActionType } from 'interface/reducer';

export const recordReducer = (
  state: WeekRecord[],
  action: recordActionType,
) => {
  switch (action.type) {
    // 언제? period바뀔 시 habit의 수량과 record의 수량을 비교. -> (차이가 나면) habit[] 순회 하면서 id 비는 것 record 생성(초기값 생성 시에 하면 일요일 자정 넘어서 월요일 되는 때엔 동작 안함)
    case 'INIT': {
      const { habits } = action.value;
      if (state.length === habits.length) return state;

      const existingRecordIDs = state.map((record) => record.habitId);

      const initiating = habits.reduce((prev: WeekRecord[], habit) => {
        if (!existingRecordIDs.includes(habit.id)) {
          const checkedDays: WeekRecord['checkedDays'] = {};
          for (const day of habit.days) checkedDays[day] = false;

          prev.push({ habitId: habit.id, checkedDays });
        }

        return prev;
      }, []);

      return [...state, ...initiating];
    }

    case 'CREATE': {
      const checkedDays: WeekRecord['checkedDays'] = {};
      for (const day of action.value.days) checkedDays[day] = false;

      return [
        ...state,
        {
          habitId: action.value.habitId,
          checkedDays,
        },
      ];
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
      return state.filter((record) => record.habitId !== action.value);

    default:
      throw Error('정의 되지 않은 action type입니다.');
  }
};
