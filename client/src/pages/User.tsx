import { Fragment, useEffect, useState } from "react";
import InputUser from "../components/Users/InputUser";
import ListUsers from "../components/Users/ListUsers";

export const Users = () => {
  const [users, setUsers] = useState<any[]>([]);

  const onSubmitForm = (e: any, name: string) => {
    e.preventDefault();

    const body = { name };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          res.json();
        }
      })
      .then((res) => {
        setUsers((prevUsers) => prevUsers.concat(res));
      })
      .catch((reason) =>
        console.error("Create user promise rejected : " + reason)
      );
  };

  const getUsers = () => {
    fetch("http://localhost:3000/users").then((res) => {
      res
        .json()
        .then((res) => {
          setUsers(res);
        })
        .catch((reason) =>
          console.error("All users promise rejected : " + reason)
        );
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <button
          className="btn btn-primary mt-3"
          onClick={() => (window.location.href = "/connections")}
        >
          Connections
        </button>
        <InputUser onSubmitForm={onSubmitForm} />
        <ListUsers users={users} />
      </div>
    </Fragment>
  );
};
