import React, { FC } from "react";
import {IUser} from "../../store/reducers/users";

import "./table.css";
import TableRow from "./TableRow/TableRow";

interface ITable {
  users: IUser[];
}

const Table: FC<ITable> = ({ users }) => {
  return (
    <div className="table">
      {users.map(user => (<TableRow key={user.id} user={user} />))}
    </div>
  );
};

export default Table;
