import { useHabitsContext } from 'contexts/HabitContext';
import { useTooltipContext } from 'contexts/ModalContext';
import { useTooltipHandleContext } from 'contexts/ModalContext';
import { useRecordContext } from 'contexts/RecordContext';
import { useRecordHandleContext } from 'contexts/RecordContext';
import { usePeriodContext } from 'contexts/RecordContext';
import { getAcheiveRecord } from 'lib/utils/recordsParser';
import Tooltip from 'components/modals/modalForms/Tooltip';
import { ALL_DAYS } from 'constant';
import { isFutureDay, isLatestWeek } from 'lib/utils/dateUtils';
import styles from '../HabitListTable.module.css';
import EmptyImageRender from './EmptyHabitsIMG';
import type { Habit, Day } from 'interface/main';

const TableBody = () => {
  const habits = useHabitsContext();
  const period = usePeriodContext();
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

  const isWithinPeriod = (createdAt: number): boolean =>
    createdAt <= period.start.origin.getTime();

  return (
    <tbody>
      {!habits.length && <EmptyImageRender />}
      {habits
        .filter(({ createdAt }) => isWithinPeriod(createdAt))
        .map(({ id, name, days }, idx) => (
          <tr key={id}>
            <td onClick={() => setTooltipId(id)}>
              {name}
              {tooltipId === id && <Tooltip />}
            </td>
            {ALL_DAYS.map((DAY) => (
              <td key={DAY}>
                {days.includes(DAY) && (
                  <input
                    className={
                      isFutureDay(DAY) || !isLatestWeek(period.end)
                        ? `${styles.DisabledCheckbox}`
                        : ``
                    }
                    type="checkbox"
                    name={DAY}
                    checked={isCheckedDay(id, DAY)}
                    onChange={(e) => onChangeCheckbox(e, id)}
                    disabled={isFutureDay(DAY) || !isLatestWeek(period.end)}
                  />
                )}
              </td>
            ))}
            <td>
              {`${getAcheiveRecord(records[idx]?.checkedDays).checked} / ${
                getAcheiveRecord(records[idx]?.checkedDays).total
              }`}
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default TableBody;
