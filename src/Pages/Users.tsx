import React from "react";
import UsersCard from "../Components/UsersCard";
import Table from "../layout/Table";
import "./styles/Users.scss";

const Users: React.FC = () => {
  return (
    <div className="UsersContainer">
      <h1 className="title">Users</h1>
      <UsersCard />
      <Table />
    </div>
  );
};

export default Users;
