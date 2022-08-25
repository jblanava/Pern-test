import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../stylesheets/components/Users/InputUser.css";

interface UserInputProps {
  onSubmitForm: (e: any, name: string) => void;
}

const InputUser = (props: UserInputProps) => {
  const [name, setName] = useState("");
  const { t } = useTranslation();

  return (
    <>
      <h1 className="title">{t("userInputTitle")}</h1>
      <form
        className="d-flex form"
        onSubmit={(e) => props.onSubmitForm(e, name)}
      >
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-success">{t("add")}</button>
      </form>
    </>
  );
};

export default InputUser;
