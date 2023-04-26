import { createContext, useContext } from 'react';
import type {
  ModalContextType,
  ModalHandleContextType,
} from 'interface/context';

export const ModalContext = createContext<ModalContextType>(null);
export const ModalHandleContext = createContext<ModalHandleContextType>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === null)
    throw new Error('<ModalContext.Provider>가 제공되지 않았습니다.');

  return context;
};

export const useModalHandleContext = () => {
  const context = useContext(ModalHandleContext);

  if (!context)
    throw new Error('<ModalHandleContext.Provider>가 제공되지 않았습니다.');

  return context;
};
