import React, { Fragment, useEffect, useState } from "react";


const ListUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const jsonData = await response.json();
      setUsers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Connections</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.usuario_id}>
              <td>{user.usuario_id}</td>
              <td>{user.name}</td>
              <td><button
                className="btn"
                onClick={() => window.location = "/connections/" + user.usuario_id}>
                {user.name + " connections"}
              </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListUsers;
