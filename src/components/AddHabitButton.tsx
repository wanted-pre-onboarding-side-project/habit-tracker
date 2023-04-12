type AddHabitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const AddHabitButton = ({ onClick }: AddHabitButtonProps) => {
  return <button onClick={onClick}>습관 추가하기</button>;
};

export default AddHabitButton;
