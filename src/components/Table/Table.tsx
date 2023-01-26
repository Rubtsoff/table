import React, { FC } from "react";

import "./table.css";

interface ITable {
  children: any;
}

const Table: FC<ITable> = ({ children }) => {
  return (
    <div className="table">
      {children}
    </div>
  );
};

export default Table;
