import { useReducer, useEffect } from 'react';
import type { habitReducerType, recordReducerType } from 'interface/reducer';

const useLocalStorageReducer = (
  key: string,
  reducer: habitReducerType | recordReducerType,
) => {
  const [state, dispatch] = useReducer(reducer, getSavedValue(key));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return { state, dispatch };
};

export default useLocalStorageReducer;

function getSavedValue(key: string) {
  const savedValue = localStorage.getItem(key);
  return savedValue === null ? [] : JSON.parse(savedValue);
}
