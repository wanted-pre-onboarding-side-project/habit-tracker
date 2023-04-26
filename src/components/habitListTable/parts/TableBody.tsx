import { useHabitsContext } from 'contexts/HabitContext';
import { useTooltipContext } from 'contexts/ModalContext';
import { useTooltipHandleContext } from 'contexts/ModalContext';
import Tooltip from 'components/modals/modalForms/Tooltip';

const TableBody = () => {
  const habits = useHabitsContext();
  const tooltipId = useTooltipContext();
  const setTooltipId = useTooltipHandleContext();

  return (
    <tbody>
      {habits.map((habit) => (
        <tr key={habit.id}>
          <td onClick={() => setTooltipId(habit.id)}>{habit.name}</td>
          {tooltipId === habit.id ? (
            <td>
              <Tooltip />
            </td>
          ) : (
            <td></td>
          )}
          <td>{habit.days.includes('월') && <input type="checkbox" />}</td>
          <td>{habit.days.includes('화') && <input type="checkbox" />}</td>
          <td>{habit.days.includes('수') && <input type="checkbox" />}</td>
          <td>{habit.days.includes('목') && <input type="checkbox" />}</td>
          <td>{habit.days.includes('금') && <input type="checkbox" />}</td>
          <td>{habit.days.includes('토') && <input type="checkbox" />}</td>
          <td>{habit.days.includes('일') && <input type="checkbox" />}</td>
          <td>some / all</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
