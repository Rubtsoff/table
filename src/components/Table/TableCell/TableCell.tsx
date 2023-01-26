import React, { FC } from "react";

import "./table-cell.css";

interface ITableRow {
  children: any;
}

const TableCell: FC<ITableRow> = ({children}) => {
  return (
    <div className="col">
      {children}
    </div>
  );
};

export default TableCell;
