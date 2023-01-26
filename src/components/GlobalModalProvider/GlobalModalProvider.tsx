import React, { FC, useState, createContext } from "react";

import { initialState } from "../../contexts/modalContext";

export const GlobalModalContext = createContext(initialState);

interface IGlobalModalProvider {
  children: any;
}

const GlobalModalProvider: FC<IGlobalModalProvider> = ({ children }) => {
  const [ModalComponent, setModalComponent] = useState<null | React.ReactElement>(null);

  const showModal = (ModalComponent: React.SetStateAction<React.ReactElement<any, string | React.JSXElementConstructor<any>> | null>) => {
    setModalComponent(ModalComponent);
  };

  const hideModal = () => {
    setModalComponent(null);
  };

  return (
    <GlobalModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {ModalComponent}
    </GlobalModalContext.Provider>
  );
};

export default GlobalModalProvider;
