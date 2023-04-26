import { DAYS } from 'constant';
import { useHabitsHandle } from 'contexts/HabitContext';
import { Day, Habit } from 'interface/main';
import React, { useRef } from 'react';
import styles from './HabitForm.module.css';

const HabitEditForm = ({
  onClose,
  habit,
}: {
  onClose: () => void;
  habit: Habit;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { handleEditHabit } = useHabitsHandle();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    if (!formRef.current) return;
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    handleEditHabit({
      id: habit.id,
      name: formData.get('habitName') as string,
      description: formData.get('habitDescription') as string,
      days: formData.getAll('habitDays') as Day[],
    });

    onClose();
  };
  return (
    <form onSubmit={handleSubmit} ref={formRef} className={styles.habitForm}>
      <div>
        <label>name</label>
        <input
          type="text"
          name="habitName"
          defaultValue={habit.name}
          maxLength={20}
          required
          minLength={1}
        />
      </div>

      <div>
        <label>description</label>
        <textarea
          name="habitDescription"
          maxLength={100}
          defaultValue={habit.description}
        />
      </div>

      <div>
        <label>days</label>
        <div>
          {DAYS.map((day) => (
            <label key={day}>
              {day}
              <input
                type="checkbox"
                name="habitDays"
                defaultChecked={habit.days.includes(day)}
                value={day}
              />
            </label>
          ))}
        </div>
      </div>
      <button type="submit">save</button>
    </form>
  );
};

export default HabitEditForm;
