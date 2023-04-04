import { useContext } from 'react';
import { PeriodContext } from '../context/PeriodContext';

export const usePeriodContext = () => {
  const periodContext = useContext(PeriodContext);
  if (!periodContext)
    throw new Error(
      '<PeriodContext.Provider> 내에서 usePeriodContext 사용해주세요',
    );
  return periodContext;
};
