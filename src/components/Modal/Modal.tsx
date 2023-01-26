import React, { FC } from "react";
import {useGlobalModalContext} from "../../contexts/modalContext";

import "./modal.css";

interface IModal {
  children: any;
}

const Modal: FC<IModal> = ({ children }) => {
  const { hideModal } = useGlobalModalContext();
  const handleModalCancel = () => {
    hideModal();
  };

  return (
    <div className="modal">
      <div className="modal-wrapper">
        {children}
        <button className="button button--error modal-close" onClick={handleModalCancel}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
