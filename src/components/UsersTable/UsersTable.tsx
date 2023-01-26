import React, { FC } from "react";

import { IUser } from "../../store/reducers/users";
import { Table, TableRow, TableCell } from "../../components";
import UsersTableRow from "./UsersTableRow";
import AddNewUserModal from "../../generalModals/AddNewUserModal";
import { useGlobalModalContext } from "../../contexts/modalContext";

import "./users-table.css";

interface IUsersTable {
  users: IUser[];
}

const UsersTable: FC<IUsersTable> = ({ users }) => {
  const { showModal } = useGlobalModalContext();

  const addNewUserHandler = () => {
    showModal(
      <AddNewUserModal />
    )
  }

  return (
    <div className="users-table">
      <button
        onClick={addNewUserHandler}
        className="button button--success add-button"
      >
        Add new user
      </button>

      {!!users.length && (
        <Table>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>About person</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
          {users.map(user => (<UsersTableRow key={user.id} user={user} />))}
        </Table>
      )}
    </div>
  );
};

export default UsersTable;
