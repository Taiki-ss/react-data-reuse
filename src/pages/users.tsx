import React from "react";
import Navi from "../components/Navi";
import usersData from "../data/users";

const Users: React.FC = () => {
  const data = usersData();
  console.log(data);
  return (
    <div>
      <Navi />
      <h1>Users</h1>
    </div>
  );
};

export default Users;
