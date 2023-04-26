import { DAYS } from 'constant';
import { useHabitsHandle } from 'contexts/HabitContext';
import { Day } from 'interface/main';
import React, { useRef } from 'react';
import styles from './HabitForm.module.css';

const HabitCreateForm = ({ onClose }: { onClose: () => void }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleCreateHabit = useHabitsHandle();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    if (!formRef.current) return;
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // TODO 유효성검사

    handleCreateHabit({
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
          maxLength={20}
          required
          minLength={1}
          pattern="^[^\s]{1,20}$"
        />
      </div>

      <div>
        <label>description</label>
        <textarea name="habitDescription" maxLength={100} />
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
                defaultChecked={true}
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

export default HabitCreateForm;
