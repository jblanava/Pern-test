import React, { Fragment, useEffect, useState } from "react";

const ListUsers = () => {
  const [users, setUsers] = useState<any>([]);

  // const getUsers = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/users");
  //     const jsonData = await response.json();
  //     setUsers(jsonData);
  //   } catch (err) {
  //     if(err instanceof Error){
  //       console.error(err.message);
  //   }else{
  //       console.error("Unexpected error",err);
  //   }
  //   }
  // };

  const getUsers =  () => {
    try {
      const response =  fetch("http://localhost:3000/users");

      response
      .then( res => {
        const jsonData = res.json()
        .then((res) => {
          setUsers(res);
        });
      });

    } catch (err) {
      if(err instanceof Error){
        console.error(err.message);
    }else{
        console.error("Unexpected error",err);
    }
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
          {users.map((user:any) => (
            <tr key={user.usuario_id}>
              <td>{user.usuario_id}</td>
              <td>{user.name}</td>
              <td><button
                className="btn"
                onClick={() => window.location.href = "/connections/" + user.usuario_id}>
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
