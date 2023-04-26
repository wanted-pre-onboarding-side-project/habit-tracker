import { useReducer, useEffect } from 'react';
import { habitReducer } from 'contexts/reducers/habitReducer';

const useLocalStorageReducer = (key: string) => {
  const [state, dispatch] = useReducer(habitReducer, getSavedValue(key));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return { state, dispatch };
};

export default useLocalStorageReducer;

function getSavedValue(key: string) {
  const savedValue = localStorage.getItem(key);
  return savedValue === null ? [] : JSON.parse(savedValue);
}
