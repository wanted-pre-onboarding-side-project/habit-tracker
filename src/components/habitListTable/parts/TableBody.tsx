import { useHabitsContext } from 'contexts/HabitContext';
import { useTooltipContext } from 'contexts/ModalContext';
import { useTooltipHandleContext } from 'contexts/ModalContext';
import { useRecordContext } from 'contexts/RecordContext';
import { useRecordHandleContext } from 'contexts/RecordContext';
import Tooltip from 'components/modals/modalForms/Tooltip';
import { ALL_DAYS } from 'constant';
import { isFutureDay } from 'lib/utils/dateUtils';
import styles from '../HabitListTable.module.css';
import EmptyImageRender from './EmptyHabitsIMG';
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
      {!habits.length && <EmptyImageRender />}
      {habits.map(({ id, name, days }, idx) => (
        <tr key={id}>
          <td onClick={() => setTooltipId(id)}>{name}</td>
          <td>{tooltipId === id && <Tooltip />}</td>
          {ALL_DAYS.map((DAY) => (
            <td key={DAY}>
              {days.includes(DAY) && (
                <input
                  className={
                    isFutureDay(DAY) ? `${styles.DisabledCheckbox}` : ``
                  }
                  type="checkbox"
                  name={DAY}
                  defaultChecked={isCheckedDay(id, DAY)}
                  onChange={(e) => onChangeCheckbox(e, id)}
                  disabled={isFutureDay(DAY)}
                />
              )}
            </td>
          ))}
          <td>
            {
              Object.values(records[idx].checkedDays).filter((isTrue) =>
                Boolean(isTrue),
              ).length
            }
            /{Object.keys(records[idx].checkedDays).length}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
