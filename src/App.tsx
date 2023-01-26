import React from 'react';
import './App.css';
import {useGetUsersQuery} from "./store/reducers/users";
import {Loader} from "./components";
import Table from "./components/Table/Table";

function App() {
  const {
    data: usersData,
    isLoading: isUsersLoading,
    isSuccess: isUsersSuccess,
    isError: isUsersError,
  } = useGetUsersQuery();
  console.log("usersData", usersData);

  const getUsersTable = () => {
    if (isUsersLoading) {
      return (
        <Loader />
      )
    }

    if (isUsersSuccess && usersData?.length) {
      return (
        <Table users={usersData} />
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
