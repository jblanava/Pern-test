import React, { Fragment, useState } from "react";

const InputUser = () => {
  const [name, setName] = useState("");

  // const onSubmitForm = async (e:any) => {
  //   e.preventDefault();
  //   try {
  //     const body = { name };
  //     const response = await fetch("http://localhost:3000/users", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body)
  //     });
  //     window.location.href = '/';
  //   } catch (err) {
  //     if(err instanceof Error){
  //       console.error(err.message);
  //   }else{
  //       console.error("Unexpected error",err);
  //   }
  //   }
  // };

  const onSubmitForm = (e:any) => {
    e.preventDefault();
    try {
      const body = { name };
      const response = fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      response.then(() => {
        console.log("listo")
      })
      window.location.href = '/';
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