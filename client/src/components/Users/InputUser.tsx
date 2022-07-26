import React, { Fragment, useState } from "react";

const InputUser = () => {
  const [name, setName] = useState("");

  const onSubmitForm = (e: any) => {
    e.preventDefault();

    const body = { name };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(() => {} , (reason) => console.error("Create user promise rejected : " + reason));
    window.location.href = '/';
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">User List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputUser;