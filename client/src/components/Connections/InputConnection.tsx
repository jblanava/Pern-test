import React, { Fragment, useState } from "react";

const InputConnection = () => {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");

  const onSubmitForm = (e:any) => {
    e.preventDefault();
      const response = fetch("http://localhost:3000/connections" + "/" + user1 + "/" + user2, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }).then(() => {}, (reason) => console.error("Create connection promise rejected : " + reason))
      window.location.href = '/connections';
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Connections List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={user1}
          onChange={e => setUser1(e.target.value)}
        /><input
          type="text"
          className="form-control"
          value={user2}
          onChange={e => setUser2(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputConnection;