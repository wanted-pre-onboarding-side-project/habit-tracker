import { Day } from '../interface/habit';
import { DAYS } from '../constant';

export const sortDays = (a: Day, b: Day) => {
  const compareStandard = Object.fromEntries(
    Object.entries(DAYS).map(([k, v]) => [v, Number(k)]),
  );

  return compareStandard[a] - compareStandard[b];
};
