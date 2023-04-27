import { useHabitsContext } from 'contexts/HabitContext';
import { useTooltipContext } from 'contexts/ModalContext';
import { useTooltipHandleContext } from 'contexts/ModalContext';
import { useRecordContext } from 'contexts/RecordContext';
import { useRecordHandleContext } from 'contexts/RecordContext';
import Tooltip from 'components/modals/modalForms/Tooltip';
import { ALL_DAYS } from 'constant';
import type { Habit, Day } from 'interface/main';

const TableBody = () => {
  const habits = useHabitsContext();
  const records = useRecordContext();
  const { checkDay, unCheckDay } = useRecordHandleContext();
  const tooltipId = useTooltipContext();
  const setTooltipId = useTooltipHandleContext();

  const isCheckedDay = (id: Habit['id'], day: Day): boolean => {
    return Boolean(
      records.find(({ habitId }) => habitId === id)?.checkedDays?.[day],
    );
  };

  const onChangeCheckbox = (
    { target: { checked, name: dayName } }: React.ChangeEvent<HTMLInputElement>,
    id: Habit['id'],
  ) => {
    if (checked) checkDay(id, dayName);
    else unCheckDay(id, dayName);
  };

  return (
    <tbody>
      {habits.map(({ id, name, days }) => (
        <tr key={id}>
          <td onClick={() => setTooltipId(id)}>{name}</td>
          <td>{tooltipId === id && <Tooltip />}</td>
          {ALL_DAYS.map((DAY) => (
            <td key={DAY}>
              {days.includes(DAY) && (
                <input
                  type="checkbox"
                  name={DAY}
                  defaultChecked={isCheckedDay(id, DAY)}
                  onChange={(e) => onChangeCheckbox(e, id)}
                />
              )}
            </td>
          ))}
          <td>some / all</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
