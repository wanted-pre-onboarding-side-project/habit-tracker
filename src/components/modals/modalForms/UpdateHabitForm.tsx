import { useHabitsContext } from 'contexts/HabitContext';
import { useHabitsHandleContext } from 'contexts/HabitContext';
import { useModalHandleContext } from 'contexts/ModalContext';
import { useTooltipContext } from 'contexts/ModalContext';
import { useRecordHandleContext } from 'contexts/RecordContext';
import useHabitInputs from 'lib/hooks/useHabitInputs';
import { ALL_DAYS } from 'constant';
import type { Habit, Day } from 'interface/main';

const UpdateHabitForm = () => {
  const { closeModal } = useModalHandleContext();
  const tooltipId = useTooltipContext() as Habit['id'];
  const habits = useHabitsContext();
  const { updateHabit } = useHabitsHandleContext();
  const { modifyRecord } = useRecordHandleContext();
  const {
    name: initName,
    description: initDesc,
    days: initDays,
  } = habits[tooltipId];
  const [habitObject, onChangeName, onChangeDesc, onChangeDays] =
    useHabitInputs(initName, initDesc, initDays);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateHabit({ id: tooltipId, ...habitObject });
    modifyRecord(tooltipId, habitObject.days);
    closeModal();
  };

  return (
    <form onSubmit={onSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>name</span>
        <input
          type="text"
          placeholder="name"
          defaultValue={initName}
          onChange={onChangeName}
        />
        <span>description</span>
        <textarea
          placeholder="description"
          defaultValue={initDesc}
          onChange={onChangeDesc}
        ></textarea>
      </div>
      <div style={{ display: 'flex' }}>
        {ALL_DAYS.map((day) => (
          <label key={day}>
            <div>{day}</div>
            <input
              type="checkbox"
              name={day}
              defaultChecked={initDays.includes(day as Day)}
              onChange={onChangeDays}
            />
          </label>
        ))}
      </div>
      <button type="submit">수정</button>
      <button type="button" onClick={closeModal}>
        닫기
      </button>
    </form>
  );
};

export default UpdateHabitForm;
