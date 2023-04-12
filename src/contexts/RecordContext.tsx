import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { getWeek } from "lib/utils/dateUtils";
import { PeriodContextType, PeriodHandleContextType } from "interface/context";

const PeriodContext = createContext<PeriodContextType>(null);
const PeriodHandleContext = createContext<PeriodHandleContextType>(null);

export const usePeriod = () => {
  const context = useContext(PeriodContext);
  if (!context)
    throw new Error("<PeriodContext.Provider>가 제공되지 않았습니다.");

  return context;
};

export const usePeriodHandle = () => {
  const context = useContext(PeriodHandleContext);
  if (!context)
    throw new Error("<PeriodHandleContext.Provider>가 제공되지 않았습니다.");

  return context;
};

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
