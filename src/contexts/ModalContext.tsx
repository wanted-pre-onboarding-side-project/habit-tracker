import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

const ModalContext = createContext(false);
const ModalHandleContext = createContext<null | (() => void)>(null);

export const useModal = () => useContext(ModalContext);

export const useModalHandle = () => {
  const context = useContext(ModalHandleContext);

  if (!context)
    throw new Error("<ModalHandleContext.Provider>가 제공되지 않았습니다.");

  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = useCallback(() => setIsModalOpen((prev) => !prev), []);

  //  TODO
  //  현재는 create 뿐이라 T/F로 충분하지만, 앞으로 여러 종류의 모달에 따라 다른 상태를 가져야 할 수 있다.

  return (
    <ModalContext.Provider value={isModalOpen}>
      <ModalHandleContext.Provider value={toggleModal}>
        {children}
      </ModalHandleContext.Provider>
    </ModalContext.Provider>
  );
};
