import { useState, ReactNode, useMemo, useCallback } from 'react';
import {
  ModalContext,
  ModalHandleContext,
  TooltipContext,
  TooltipHandleContext,
} from './ModalContext';
import type { Habit } from 'interface/main';
import type { ModalContextType } from 'interface/context';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, setModalState] = useState<ModalContextType>(null);
  const [tooltipId, setTooltipId] = useState<Habit['id'] | null>(null);

  const modalHandlers = useMemo(
    () => ({
      openModal: (modalType: ModalContextType) => setModalState(modalType),
      closeModal: () => setModalState(null),
    }),
    [],
  );

  //  TODO
  //  현재는 create 뿐이라 T/F로 충분하지만, 앞으로 여러 종류의 모달에 따라 다른 상태를 가져야 할 수 있다.

  return (
    <ModalContext.Provider value={modalState}>
      <ModalHandleContext.Provider value={modalHandlers}>
        <TooltipContext.Provider value={tooltipId}>
          <TooltipHandleContext.Provider value={setTooltipId}>
            {children}
          </TooltipHandleContext.Provider>
        </TooltipContext.Provider>
      </ModalHandleContext.Provider>
    </ModalContext.Provider>
  );
};
