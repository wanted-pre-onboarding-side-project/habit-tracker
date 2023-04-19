import { useState, ReactNode, useCallback } from "react";
import { getPeriod } from "lib/utils/dateUtils";
import { PeriodContext, PeriodHandleContext } from "./RecordContext";

export const RecordProvider = ({ children }: { children: ReactNode }) => {
  const [period, setPeriod] = useState(getPeriod());

  const movePeriod = useCallback(
    (direction: "prev" | "next") => {
      setPeriod(getPeriod(period.start, direction));
    },
    [period]
  );

  return (
    <PeriodContext.Provider value={period}>
      <PeriodHandleContext.Provider value={movePeriod}>
        {children}
      </PeriodHandleContext.Provider>
    </PeriodContext.Provider>
  );
};
