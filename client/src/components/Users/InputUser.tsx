import { useState } from "react";

interface UserInputProps{
  onSubmitForm: (e: any, name: string) => void;
}

const InputUser = (props: UserInputProps) => {
  const [name, setName] = useState("");

  return (
    <>
      <h1 className="text-center mt-5">User List</h1>
      <form className="d-flex mt-5" onSubmit={(e) => props.onSubmitForm(e, name)}>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputUser;