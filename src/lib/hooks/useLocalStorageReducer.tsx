import { useReducer, useEffect, Reducer } from 'react';
import type { Habit } from 'lib/types/main';

const useLocalStorageReducer = (
  key: string,
  reducer: Reducer<
    Habit[],
    { type: 'ADD' | 'UPDATE' | 'DELETE'; payload: Habit }
  >,
) => {
  const [state, dispatch] = useReducer(reducer, getSavedValue(key));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return { state, dispatch };
};

export default useLocalStorageReducer;

function getSavedValue(key: string) {
  const savedValue = localStorage.getItem(key);
  return savedValue === null ? [] : JSON.parse(savedValue);
}
