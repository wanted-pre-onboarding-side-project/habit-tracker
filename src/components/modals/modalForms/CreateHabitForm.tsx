import { useHabitsHandleContext } from 'contexts/HabitContext';
import { useModalHandleContext } from 'contexts/ModalContext';
import useHabitInputs from 'lib/hooks/useHabitInputs';

const DAYS = ['월', '화', '수', '목', '금', '토', '일'];

const CreateHabitForm = () => {
  const { closeModal } = useModalHandleContext();
  const { createHabit } = useHabitsHandleContext();
  const [habitObject, onChangeName, onChangeDesc, onChangeDays] =
    useHabitInputs('', '', []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createHabit(habitObject);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>name</span>
        <input type="text" placeholder="name" onChange={onChangeName} />
        <span>description</span>
        <textarea placeholder="description" onChange={onChangeDesc}></textarea>
      </div>
      <div style={{ display: 'flex' }}>
        {DAYS.map((day) => (
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
      <button type="submit">생성</button>
      <button type="button" onClick={closeModal}>
        취소
      </button>
    </form>
  );
};

export default CreateHabitForm;
