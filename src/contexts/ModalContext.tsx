import { createContext, useContext } from 'react';
import type {
  ModalContextType,
  ModalHandleContextType,
  TooltipContextType,
  TooltipHandleContextType,
} from 'interface/context';

export const ModalContext = createContext<ModalContextType>(null);
export const ModalHandleContext = createContext<ModalHandleContextType>(null);
export const TooltipContext = createContext<TooltipContextType>(null);
export const TooltipHandleContext =
  createContext<TooltipHandleContextType>(null);

export const useModalContext = () => useContext(ModalContext);

export const useModalHandleContext = () => {
  const context = useContext(ModalHandleContext);

  if (!context)
    throw new Error('<ModalHandleContext.Provider>가 제공되지 않았습니다.');

  return context;
};

export const useTooltipContext = () => useContext(TooltipContext);

export const useTooltipHandleContext = () => {
  const context = useContext(TooltipHandleContext);

  if (!context)
    throw new Error('<TooltipHandleContext.Provider>가 제공되지 않았습니다.');

  return context;
};
