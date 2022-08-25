import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../stylesheets/components/Connections/InputConnection.css";

interface ConnectionInput {
  onSubmitForm: (e: any, user1: string, user2: string) => void;
}

const InputConnection = (props: ConnectionInput) => {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const { t } = useTranslation();

  return (
    <>
      <h1 className="title">{t("connectionTitle")}</h1>
      <form
        className="d-flex form"
        onSubmit={(e) => props.onSubmitForm(e, user1, user2)}
      >
        <input
          type="text"
          className="form-control"
          value={user1}
          onChange={(e) => setUser1(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          value={user2}
          onChange={(e) => setUser2(e.target.value)}
        />
        <button className="btn btn-success">{t("add")}</button>
      </form>
    </>
  );
};

export default InputConnection;
