import { useContext } from "react";
import { GlobalModalContext } from "../components";


type TGlobalModalContext = {
  showModal: (ModalComponent: JSX.Element) => void;
  hideModal: () => void;
};

export const initialState: TGlobalModalContext = {
  showModal: () => ({}),
  hideModal: () => ({}),
};

export const useGlobalModalContext = () => useContext(GlobalModalContext);
