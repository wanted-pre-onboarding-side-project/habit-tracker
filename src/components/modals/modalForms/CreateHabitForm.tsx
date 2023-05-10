import { useHabitsHandleContext } from 'contexts/HabitContext';
import { useModalHandleContext } from 'contexts/ModalContext';
import useHabitInputs from 'lib/hooks/useHabitInputs';
import { ALL_DAYS } from 'constant';
import styles from '../ModalContainer.module.css';

const CreateHabitForm = () => {
  const { closeModal } = useModalHandleContext();
  const { createHabit } = useHabitsHandleContext();
  const [habitObject, onChangeName, onChangeDesc, onChangeDays] =
    useHabitInputs('', '', []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createHabit(habitObject);
    closeModal();
  };

  return (
    <form onSubmit={onSubmit} className={styles.CreateHabitForm}>
      <div>
        <p>name</p>
        <input type="text" placeholder="name" onChange={onChangeName} />
      </div>
      <div>
        <p>description</p>
        <textarea placeholder="description" onChange={onChangeDesc}></textarea>
      </div>

      <div>
        {ALL_DAYS.map((day) => (
          <label key={day}>
            <div>{day}</div>
            <input
              type="checkbox"
              name={day}
              defaultChecked={true}
              onChange={onChangeDays}
            />
          </label>
        ))}
      </div>

      <div>
        <button type="submit">생성</button>
        <button type="button" onClick={closeModal}>
          취소
        </button>
      </div>
    </form>
  );
};

export default CreateHabitForm;
