import { createContext, useContext } from "react";
import { PeriodContextType, PeriodHandleContextType } from "interface/context";

export const PeriodContext = createContext<PeriodContextType>(null);
export const PeriodHandleContext = createContext<PeriodHandleContextType>(null);

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
