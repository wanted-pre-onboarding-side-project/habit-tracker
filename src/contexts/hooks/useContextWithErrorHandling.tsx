import { useContext } from 'react';

export const useContextWithErrorHandling = <T,>(
  context: React.Context<T | null>,
): T => {
  const value = useContext(context);
  if (!value) {
    throw new Error('Provider 내부에서 사용해주세요');
  }
  return value;
};
