import React, { FC } from "react";

import "./table-row.css";

interface ITableRow {
  children: any;
}

const TableRow: FC<ITableRow> = ({ children }) => {
  return (
    <div className="row">
      {children}
    </div>
  );
};

export default TableRow;
