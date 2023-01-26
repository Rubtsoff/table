import React, {FC, useState} from "react";

import {Modal} from "../components";
import {IUser, useAddUserMutation} from "../store/reducers/users";
import {useGlobalModalContext} from "../contexts/modalContext";

const defaultUserData: Partial<IUser> = {
  age: "",
  name: "",
  about: "",
}

const AddNewUserModal: FC = () => {
  const [ newUser, setNewUser] = useState<Partial<IUser>>(defaultUserData);
  const [addNewUser] = useAddUserMutation();
  const { hideModal } = useGlobalModalContext();

  const onChangeNewUser = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [field]: e.target.value
    })
  }

  const onAddNewUser = async() => {
    try {
      await addNewUser(newUser).unwrap();
      hideModal();
    }
    catch (e) {
      console.error(`Error while add new user: ${e}`)
    }
  }

  return (
    <Modal>
      <div>Age: <input type="text" value={newUser.age} onChange={onChangeNewUser("age")} /></div>
      <div>About person: <input type="text" value={newUser.about} onChange={onChangeNewUser("about")} /></div>
      <div>Name: <input type="text" value={newUser.name} onChange={onChangeNewUser("name")} /></div>

      <button onClick={onAddNewUser} className="button button--success">Save</button>
    </Modal>
  );
};

export default AddNewUserModal;
