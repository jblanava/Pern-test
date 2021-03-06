import React, { Fragment, useState } from "react";

const InputConnection = () => {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");

  const onSubmitForm = async (e:any) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/connections" + "/" + user1 + "/" + user2, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      window.location.href = '/connections';
    } catch (err) {
      if(err instanceof Error){
        console.error(err.message);
    }else{
        console.error("Unexpected error",err);
    }
    }
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