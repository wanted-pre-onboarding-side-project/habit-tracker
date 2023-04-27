import type { WeekRecord, Day } from 'interface/main';
import type { recordActionType } from 'interface/reducer';

export const recordReducer = (
  state: WeekRecord[],
  action: recordActionType,
) => {
  switch (action.type) {
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
