import { useHabitsContext } from 'contexts/HabitContext';

const TableBody = () => {
  const habits = useHabitsContext();

  return (
    <tbody>
      {habits.map((habit) => (
        <tr key={habit.id}>
          <td>{habit.name}</td>
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
