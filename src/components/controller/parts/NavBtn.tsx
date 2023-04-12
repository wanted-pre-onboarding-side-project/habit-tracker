import { usePeriodHandle } from "contexts/RecordContext";

const NavBtn = () => {
  const movePeriod = usePeriodHandle();

  return (
    <div>
      <button onClick={() => movePeriod("prev")}>Prev</button>
      <button onClick={() => movePeriod("next")}>Next</button>
    </div>
  );
};

export default NavBtn;
