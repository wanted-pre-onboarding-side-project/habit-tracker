import { useState, ReactNode, useCallback } from "react";
import { getWeek } from "lib/utils/dateUtils";
import { PeriodContext, PeriodHandleContext } from "./RecordContext";

export const RecordProvider = ({ children }: { children: ReactNode }) => {
  const [period, setPeriod] = useState(getWeek());

  const movePeriod = useCallback(
    (direction: "prev" | "next") => {
      setPeriod(getWeek(period.start, direction === "prev" ? -7 : 7));
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
