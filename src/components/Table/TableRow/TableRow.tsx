import React, {FC, useState} from "react";
import {IUser, useChangeUserMutation, useDeleteUserMutation} from "../../../store/reducers/users";
import TableCell from "../TableCell/TableCell";

import "./table-row.css";

interface ITableRow {
  user: IUser;
}

const TableInput = (
  {
    readOnly,
    value,
    callback,
  }: {
    readOnly: boolean,
    value: string | number,
    callback: (e: React.ChangeEvent<HTMLInputElement>) => void,
  }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={callback}
      className="table-input"
      readOnly={readOnly}
    />
  )
}

const TableRow: FC<ITableRow> = ({user}) => {
  const [readOnly, setReadOnly] = useState(true);
  const [userState, setUserState] = useState<IUser>(user);

  const [deleteUser, { isLoading: isDeleteLoading }] = useDeleteUserMutation();
  const [changeUser, { isLoading: isChangeLoading }] = useChangeUserMutation();

  const { id, age, name, about } = userState;

  const isLoading = isDeleteLoading || isChangeLoading;

  const onChangeField = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserState({
      ...userState,
      [field]: e.target.value
    })
  }

  const onEdit = () => {
    setReadOnly(false);
  }

  const onSave = async () => {
    try {
      await changeUser({ id, name, about, age }).unwrap();
      setReadOnly(true);
    } catch (e) {
      console.error(`On save error ${e}`)
    }
  }

  const onDelete = () => {
    deleteUser(id);
  }

  return (
    <div className="row">
      <TableCell>
        <TableInput
          value={id}
          callback={onChangeField("id")}
          readOnly={true}
        />
      </TableCell>
      <TableCell>
        <TableInput
          value={age}
          callback={onChangeField("age")}
          readOnly={readOnly}
        />
      </TableCell>
      <TableCell>
        <TableInput
          value={about}
          callback={onChangeField("about")}
          readOnly={readOnly}
        />
      </TableCell>
      <TableCell>
        <TableInput
          value={name}
          callback={onChangeField("name")}
          readOnly={readOnly}
        />
      </TableCell>

      <TableCell>
        {readOnly
          ? <button onClick={onEdit} disabled={isLoading}>Edit</button>
          : <button onClick={onSave} disabled={isLoading}>Save</button>
        }
      </TableCell>
      <TableCell>
        <button onClick={onDelete} disabled={isLoading}>Delete</button>
      </TableCell>
    </div>
  );
};

export default TableRow;
