import { useHabitsContext } from 'contexts/HabitContext';
import { useTooltipContext } from 'contexts/ModalContext';
import { useTooltipHandleContext } from 'contexts/ModalContext';
import Tooltip from 'components/modals/modalForms/Tooltip';
import { ALL_DAYS } from 'constant';

const TableBody = () => {
  const habits = useHabitsContext();
  const tooltipId = useTooltipContext();
  const setTooltipId = useTooltipHandleContext();

  return (
    <tbody>
      {habits.map(({ id, name, days }) => (
        <tr key={id}>
          <td onClick={() => setTooltipId(id)}>{name}</td>
          {tooltipId === id ? (
            <td>
              <Tooltip />
            </td>
          ) : (
            <td></td>
          )}
          {ALL_DAYS.map((DAY) => (
            <td key={DAY}>{days.includes(DAY) && <input type="checkbox" />}</td>
          ))}
          <td>some / all</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
