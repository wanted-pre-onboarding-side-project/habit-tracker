import './PeriodControl.css';

interface PeriodControlProps {
  startDate: string; // 주의 시작일(월요일)
  endDate: string; // 주의 마지막일(일요일)
  handlePrevButton: () => void;
  handleNextButton: () => void;
  disableNextButton?: boolean;
}

const PeriodControl = ({
  startDate,
  endDate,
  handlePrevButton,
  handleNextButton,
  disableNextButton,
}: PeriodControlProps) => {
  return (
    <section className="period">
      <button onClick={handlePrevButton}>이전</button>
      <button onClick={handleNextButton} disabled={disableNextButton}>
        다음
      </button>
      <div>
        {startDate} ~ {endDate}
      </div>
    </section>
  );
};

export default PeriodControl;
