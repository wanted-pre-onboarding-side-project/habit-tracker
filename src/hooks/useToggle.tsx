import { useCallback, useState } from 'react';

const useToggle = (defaultValue = false): [boolean, () => void] => {
  const [value, setValue] = useState(defaultValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle];
};

export default useToggle;