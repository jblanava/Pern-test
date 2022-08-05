import { useState } from "react";

interface ConnectionInput {
  onSubmitForm: (e: any, user1: string, user2: string) => void;
}

const InputConnection = (props: ConnectionInput) => {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");

  return (
    <>
      <h1 data-testid="inputConnectionTitle" className="text-center mt-5">
        Connections List
      </h1>
      <form
        className="d-flex mt-5"
        onSubmit={(e) => props.onSubmitForm(e, user1, user2)}
      >
        <input
          data-testid="inputUserId1"
          type="text"
          className="form-control"
          value={user1}
          onChange={(e) => setUser1(e.target.value)}
          required
        />
        <input
          data-testid="inputUserId2"
          type="text"
          className="form-control"
          value={user2}
          onChange={(e) => setUser2(e.target.value)}
          required
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputConnection;
