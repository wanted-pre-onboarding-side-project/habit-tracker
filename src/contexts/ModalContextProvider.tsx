import { useState, ReactNode, useCallback } from 'react';
import {
  ModalContext,
  ModalHandleContext,
  TooltipContext,
  TooltipHandleContext,
} from './ModalContext';
import type { Habit } from 'interface/main';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tooltipId, setTooltipId] = useState<Habit['id'] | null>(null);

  const toggleModal = useCallback(() => setIsModalOpen((prev) => !prev), []);

  //  TODO
  //  현재는 create 뿐이라 T/F로 충분하지만, 앞으로 여러 종류의 모달에 따라 다른 상태를 가져야 할 수 있다.

  return (
    <ModalContext.Provider value={isModalOpen}>
      <ModalHandleContext.Provider value={toggleModal}>
        <TooltipContext.Provider value={tooltipId}>
          <TooltipHandleContext.Provider value={setTooltipId}>
            {children}
          </TooltipHandleContext.Provider>
        </TooltipContext.Provider>
      </ModalHandleContext.Provider>
    </ModalContext.Provider>
  );
};
