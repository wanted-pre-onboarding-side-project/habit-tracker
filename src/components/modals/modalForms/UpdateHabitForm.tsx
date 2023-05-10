import { useHabitsContext } from 'contexts/HabitContext';
import { useHabitsHandleContext } from 'contexts/HabitContext';
import { useModalHandleContext } from 'contexts/ModalContext';
import { useTooltipContext } from 'contexts/ModalContext';
import { useRecordHandleContext } from 'contexts/RecordContext';
import useHabitInputs from 'lib/hooks/useHabitInputs';
import { ALL_DAYS } from 'constant';
import styles from '../ModalContainer.module.css';
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
    createdAt,
  } = habits.find(({ id }) => id === tooltipId) as Habit;
  const [habitObject, onChangeName, onChangeDesc, onChangeDays] =
    useHabitInputs(initName, initDesc, initDays);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateHabit({ id: tooltipId, ...habitObject, createdAt });
    modifyRecord(tooltipId, habitObject.days);
    closeModal();
  };

  return (
    <form onSubmit={onSubmit} className={styles.CreateHabitForm}>
      <div>
        <p>name</p>
        <input
          type="text"
          placeholder="name"
          defaultValue={initName}
          onChange={onChangeName}
        />
      </div>
      <div>
        <p>description</p>
        <textarea
          placeholder="description"
          defaultValue={initDesc}
          onChange={onChangeDesc}
        ></textarea>
      </div>

      <div>
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

      <div>
        <button type="submit">수정</button>
        <button type="button" onClick={closeModal}>
          닫기
        </button>
      </div>
    </form>
  );
};

export default UpdateHabitForm;
