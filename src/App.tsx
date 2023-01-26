import React from 'react';

import { Loader } from "./components";
import { useGetUsersQuery} from "./store/reducers/users";
import UsersTable from "./components/UsersTable/UsersTable";

import './App.css';

function App() {
  const {
    data: usersData,
    isLoading: isUsersLoading,
    isSuccess: isUsersSuccess,
  } = useGetUsersQuery();

  const getUsersTable = () => {
    if (isUsersLoading) {
      return (
        <Loader />
      )
    }

    if (isUsersSuccess) {
      return (
        <UsersTable users={usersData} />
      )
    }
  }

  return (
    <div className="app">
      {getUsersTable()}
    </div>
  );
}

export default App;
